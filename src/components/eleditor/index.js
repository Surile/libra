import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

// let editor = null;

export default class Eleditor extends Component {
  componentDidMount() {
    this.setConfig();
  }
  componentWillMount() {}

  setConfig() {
    new Eleditor({
      el: "#app"
    });
  }
  render() {
    return (
      <View className='container'>
        <View id='editor' />
        <View>1111</View>
      </View>
    );
  }
}
