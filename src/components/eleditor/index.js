import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Quill from "quill";
import "quill/dist/quill.snow.css";

// let editor = null;

var toolbarOptions = [
  [{ header: 1 }, { header: 2 }], // custom button values
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link"],
  ["image"],
  ["video"],
  [{ list: "ordered" }, { list: "bullet" }],
  // [{ script: "sub" }, { script: "super" }], // superscript/subscript
  // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  // [{ direction: "rtl" }], // text direction

  // [{ size: ["small", false, "large", "huge"] }], // custom dropdown

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  // [{ font: [] }],
  [{ align: [] }]
];

export default class Eleditor extends Component {
  state = {
    value: ""
  };
  componentDidMount() {
    this.editor = null;
    this.setConfig();
  }

  componentWillMount() {
    if (this.props.html) {
      this.setState({
        value: this.props.html
      });
    }
  }
  setConfig() {
    const options = {
      debug: "warn",
      theme: "snow",
      placeholder: "请输入内容",
      // readOnly: true,
      modules: {
        toolbar: toolbarOptions
      }
    };
    // 实例化 Quill 并且储存在实例原型上

    const editor = (this.editor = new Quill("#editor", options));
    // 实现输入受控，从state中读取html字符串写入编辑器中
    const { value } = this.state;
    // 判断value中是否有值，如果有那么就写入编辑器中
    if (value) editor.clipboard.dangerouslyPasteHTML(value);
    // 判断props中是否有值，如果有就写入编辑器中
    // if (this.props.html) editor.clipboard.dangerouslyPasteHTML(this.props.html);
    // 设置事件，change事件，
    editor.on("text-change", this.handleChange.bind(this));

    // editor.getModule("toolbar").addHandler("image", this.uploadImage);
  }
  // uploadImage() {
  //   console.log("111");

  //   var input = document.createElement("input");
  //   input.type = "file";
  //   input.accept = "image/jpeg,image/png,image/jpg,image/gif";
  //   input.onchange = this.onFileChange;
  //   input.click();
  // }

  // onFileChange(e) {
  //   // var self = this;
  //   console.log("e", e);
  //   var fileInput = e.target;
  //   if (fileInput.files.length == 0) {
  //     return;
  //   }
  //   this.editor.focus();
  //   if (fileInput.files[0].size > 1024 * 1024 * 100) {
  //     this.$alert("图片不能大于600KB", "图片尺寸过大", {
  //       confirmButtonText: "确定",
  //       type: "warning"
  //     });
  //   }
  //   var data = new FormData();
  //   data.append(this.fileName, fileInput.files[0]);
  //   // this.axios.post(this.uploadUrl, data).then(function(res) {
  //   //   if (res.data) {
  //   //     self.editor.insertEmbed(
  //   //       self.editor.getSelection().index,
  //   //       "image",
  //   //       res.data.url
  //   //     );
  //   //   }
  //   // });
  // }
  handleChange() {
    this.setState({
      value: this.editor.root.innerHTML
    });
  }

  render() {
    return (
      <View className='container'>
        <View id='editor' />
      </View>
    );
  }
}
