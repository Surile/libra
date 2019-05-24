import Taro, { Component } from "@tarojs/taro";
import { View, Picker as AtPicker } from "@tarojs/components";

export default class Picker extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    dateSel: null
  };
  onDateChange = e => {
    console.log("e", e);
    if (this.props.mode == "selector") {
      this.setState({
        dateSel: this.props.range[e.detail.value]
      });
      console.log("111", this.props);
    } else {
      this.setState({
        dateSel: e.detail.value
      });
    }

    this.props.onChange(e);
  };
  render() {
    const { title, placeholder, mode, des, range } = this.props;
    return (
      <View className='at-input flex column space'>
        <View className='flex'>
          <View className='at-input__title'>{title}</View>
          <AtPicker mode={mode} range={range} onChange={this.onDateChange}>
            {!this.state.dateSel ? (
              <View className='placeholder'>{placeholder}</View>
            ) : (
              <View className='placeholder'>{this.state.dateSel}</View>
            )}
          </AtPicker>
        </View>
        {des && <View className='school-des'>{des}</View>}
      </View>
    );
  }
}
