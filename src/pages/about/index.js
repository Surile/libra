import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Eleditor from "@/components/eleditor";

export default class About extends Component {
  config = {
    navigationBarTitleText: "机构介绍"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className='container'>
        <Eleditor />
      </View>
    );
  }
}
