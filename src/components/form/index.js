import Taro, { Component } from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import { AtInput, Eleditor, AtPicker } from "@/components";
import { AtImagePicker, AtSwitch } from "taro-ui";
import "./index.scss";

export default class Form extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    files: [
      {
        url: "https://storage.360buyimg.com/mtd/home/111543234387022.jpg"
      },
      {
        url: "https://storage.360buyimg.com/mtd/home/221543234387016.jpg"
      },
      {
        url: "https://storage.360buyimg.com/mtd/home/331543234387025.jpg"
      }
    ],
    selector: ["美国", "中国", "巴西", "日本"],
    checked: true
  };

  onChange(files) {
    this.setState({
      files
    });
  }
  onFail(mes) {
    console.log(mes);
  }
  onImageClick(index, file) {
    console.log(index, file);
  }
  render() {
    return (
      <Block>
        <View className='form'>
          <View className='form-flex'>
            <View className='form-title flex'>
              添加头图 <View className='form-tip'>建议尺寸 750*480 像素</View>
            </View>
            <AtImagePicker
              multiple
              files={this.state.files}
              onChange={this.onChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </View>
          <View className='form-flex space'>
            <View className='form-title flex column'>
              添加头图
              <View className='form-des'>
                活动参数有人报名后不可修改（标题、库存、截止时间除外，库存只可增加不可减少），涉及金额只填写数字勿填单位
              </View>
            </View>
            <AtInput title='活动标题' />
            <AtInput title='原价' />
            <AtInput title='单独购买价' />
            <AtInput
              title='成团人数'
              column
              des='建议设置5人以下便于成团，未成团系统不会自动退款，自行与客户协商'
            />
            <AtInput title='预付定金' />
            <AtInput
              title='预付定金'
              column
              des='若团购价过高，可设置定金，线下支付尾款，0为无需线上支付'
            />
            <AtInput
              title='分销佣金'
              column
              des='A打开活动分享给B，B通过A分享进入活动报名并支付（单买和团买均可），A即获得现金红包，即时返现到A的微信零钱，建议设置5-10元，必须少于预付定金'
            />
            <AtInput
              title='库存'
              column
              des='礼品份数，报名并支付即减少1，为0时活动自动结束，最大值999'
            />
            <AtPicker
              title='截止时间'
              placeholder='请选择活动结束时间'
              mode='date'
              des='默认当前时间开始，建议活动时间5天内效果最佳'
            />
            <AtInput title='活动玩法' column />
            <View className='editor'>
              <View className='at-input__title editor-title'>活动介绍</View>
              <Eleditor />
            </View>
            <View className='flex column'>
              <View className='at-input__title'>机构介绍</View>
              <View className='school-des'>
                包含、课程、师资、场地介绍、需统一设置，所有活动都可直接使用，添加或修改请进入：商家中心
                - 机构介绍合作
              </View>
            </View>
          </View>
          <View className='form-flex space'>
            <View className='form-title '>其他设置</View>{" "}
            <AtPicker
              title='背景音乐'
              placeholder='请选择活动背景音乐'
              mode='selector'
              range={this.state.selector}
            />
            <AtPicker
              title='活动样式'
              placeholder='请选择活动活动样式'
              mode='selector'
              range={this.state.selector}
            />
            <AtSwitch
              title='开启弹幕'
              color='#FFBF2A'
              checked={this.state.checked}
              onChange={this.handleChange}
            />
            <AtPicker
              title='课程类别'
              placeholder='请选择课程类别'
              mode='selector'
              range={this.state.selector}
            />
          </View>
          <View className='form-flex space'>
            <View className='form-title '>报名设置</View>
            <AtInput title='姓名' column />
            <AtInput title='手机号' column />
            <AtInput title='手机号' column>
              必填
            </AtInput>
            <View className='placeholder' style='margin-top:10px;'>
              默认必填姓名、手机号码，您可以设置要求填写其它信息，自定义项为空则不显示，最多6个字，勾选项则必填，不勾选为选填。
            </View>
          </View>
        </View>
        <View className='btn'>保存活动</View>
      </Block>
    );
  }
}
