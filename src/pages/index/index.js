import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Form } from "@/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "发布活动-校云宝"
  };

  state = {};

  componentWillMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // onClick() {
  //   Taro.navigateTo({
  //     url: "/pages/about/index"
  //   });
  // }

  componentDidMount() {
    // 配置项，在Quill 官网上有详细说
  }

  render() {
    return (
      <View className='container'>
        <View className='header-tips'>
          发布须知：需要编辑的数据较多，请5分钟左右保存一次，以免数据丢失，其它规则请遵守用户协议
        </View>
        <Form />
      </View>
    );
  }
}
