import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Eleditor } from "@/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  state = {
    html: "看看看撒卡卡看"
  };

  componentWillMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidMount() {
    // 配置项，在Quill 官网上有详细说
    console.log("111", this.eleditor.state.value);
  }

  onChange() {
    console.log("触发");
  }

  refEditor = node => (this.eleditor = node); // `this.eleditor` 会变成 `Eleditor` 组件实例的引用

  render() {
    return (
      <View className='index'>
        <Eleditor ref={this.refEditor} html={this.state.html} />
      </View>
    );
  }
}
