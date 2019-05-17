import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // onClick() {
  //   Taro.navigateTo({
  //     url: "/pages/about/index"
  //   });
  // }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {/* <View onClick={this.onClick}>跳转</View> */}
      </View>
    );
  }
}
