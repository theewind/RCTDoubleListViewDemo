const React = require('react-native');
const Infrastructure = require('@rn/infrastructure');

import NetService from './services/nettry';
import NetModelService from './services/netmodel';
import CommonCell from './components/commoncell';

var NVNetworkClient = require('react-native').NativeModules.NVNetworkClient;

const {
    Account,
    DeviceInfo,
    Portal,
    Statistics,
} = Infrastructure;

const {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Dimensions,
  NativeAppEventEmitter,
} = React;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class FailureView extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      testString : '',
      isloading : true,
    };
  }

  componentDidMount() {
     //本地rn调用网络请求
     this.fetchData();
  }

  async fetchData() {
   NetService
   .fetchFooter()
   .then((responseData) => {
     if (responseData.data && responseData.data.surveyContent) {
       this.setState({
         data: responseData.data,
       });
     }
   })
   .catch(() => {});
  }

   async getResult(){
     try {
       //返回simplemessage
       //var result = await NVNetworkClient.getnvdata('http://m.api.dianping.com/wedding/commonverifycode.bin',{'phonenum':'15901643937'},'SimpleMsg');
       //返回nvbasemodel
       //var result = await NVNetworkClient.getnvdata('http://rs.api.dianping.com/getphonevc.yy',{'phone':'86_15901643935','mapi_cacheType':0},'VCResult');
       //post请求
       //var result = await NVNetworkClient.postnvdata('http://m.api.dianping.com/fun/mtshopdetailktvbooktable.fn',{'dealgroupid':'123213'},'KTVTable');
       var metaininfo = NetModelService.modelsForClass('VCResult');
       var result = await NVNetworkClient.getnvdata('http://rs.api.dianping.com/getphonevc.yy',{'phone':'86_1590sddssdfs1643935','mapi_cacheType':0},'VCResult',metaininfo);
       //var result = await NVNetworkClient.getnvdata('http://m.api.dianping.com/orderdish/spudishmenu.hbt',{'shopid':56827309,'entrance':0},'SpuDishMenuResult',metaininfo);
       return result;
    } catch (e) {
       console.error(e);
    };
   }

  render() {
    return (
      <View style = {styles.container}>

        <View style = {styles.failureHead}>
          <View style = {styles.headFirstLine}>
            <Image source={require('../asset/icon_pay_failed.png')} style = {styles.failureIcon}></Image>

            <Text style = {styles.failureHeadText}>抱歉！买单失败！！！！！！！</Text>
          </View>

          <Text style = {[styles.failureHeadSubText,styles.payBillFailReason]}>操作超时</Text>
          <Text style = {[styles.failureHeadSubText,styles.tryPayBillAgain]}>您可尝试重新买单</Text>
        </View>

        <View style = {styles.failureContainer}>
          <View style = {styles.orderinfoCommonCell}>
            <Text style = {styles.orderinfoLeftText}>订单号码</Text>
            <Text style = {[styles.orderinfoRightText,styles.orderinfoOrangeColor]} numberOfLines={1}>{this.props.orderId}</Text>
          </View>
          <CommonCell leftString = '实付金额' rightString = {'¥'+this.props.amount+'  ¥'+this.props.totalfee}></CommonCell>
          <CommonCell leftString = '商家名称' rightString = {this.props.bizname}></CommonCell>
          <CommonCell leftString = '手机号码' rightString = {this.props.tel}></CommonCell>
          <CommonCell leftString = '买单时间' rightString = {this.props.paytimeString}></CommonCell>
          <View style = {styles.sparateline}></View>
          <CommonCell leftString = '退款路径' rightString = {this.props.refundPath}></CommonCell>
          <CommonCell leftString = '到账时间' rightString = {this.props.refundTime}></CommonCell>
        </View>

        {this.getActionView()}

    </View>
    );
  }

  getActionView(){
    return (
      <View style = {styles.actionView}>
          <TouchableHighlight
            onPress={this.payBillAgainButton.bind(this)}
            style={[styles.actionButton,styles.payBillAgain]}
            underlayColor="#049387"
            activeOpacity={0.9}
          >
            <Text style={styles.surveyText}>
              重新下单
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            //onPress={this.checkMeituanAccountButton.bind(this)}
            onPress={()=>this.checkMeituanAccountButton()}
            style={[styles.actionButton,styles.checkMeituanAccount]}
            underlayColor="#049387"
            activeOpacity={0.9}
          >
            <Text style={styles.surveyText}>
              查看美团余额
            </Text>
          </TouchableHighlight>
      </View>
  )}

  payBillAgainButton() {
    this.getResult().then((responseData) => {
      console.log(responseData);
        this.setState({
          testString: responseData,
        });
    });
    //Portal.jumpToPage('imeituan://www.meituan.com/pay_detail?id='+this.props.orderId);
  }

  checkMeituanAccountButton() {
    Statistics.trackEvent({
      event: '查看美团账号',
      action: '点击按钮',
      label: '',
      value: '',
    });
   Portal.jumpToPage('meituanpayment://wallet/launch');
  }

};

var styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    backgroundColor: '#f0efed',
    height : windowHeight,
  },

  failureHead: {
    alignItems : 'center',
  },

  headFirstLine: {
    flexDirection : 'row',
  },

  failureIcon : {
    width : 30,
    height : 30,
    marginTop : 24,
    marginRight : 10,
  },

  failureHeadText: {
    color : '#333333',
    fontSize : 18,
    marginTop : 30,
    marginBottom: 9.5,
  },

  failureHeadSubText: {
    color : '#999999',
    fontSize : 13,
  },

  payBillFailReason: {
    marginBottom: 7,
  },

  tryPayBillAgain: {
    marginBottom: 24,
  },

  failureContainer: {
    backgroundColor : 'white'
  },

  orderinfoLeftText: {
    flex : 1,
    fontSize : 15,
    color : '#999999',
    marginLeft : 12,
    textAlign : 'left',
  },

  orderinfoRightText: {
    flex : 1,
    fontSize : 15,
    marginRight : 12,
    textAlign : 'right',
  },

  orderinfoCommonCell: {
    flexDirection : 'row',
    height : 40,
    backgroundColor : '#ffffff',
    width : windowWidth,
    alignItems : 'center',
  },

  orderinfoOrangeColor : {
    color : '#ec5330',
  },


  sparateline : {
    backgroundColor : '#e5e5e5',
    height : 0.5,
    width: 351,
    marginLeft : 12,
    marginRight : 12,
  },

  actionView: {
    width : windowWidth,
    flexDirection : 'row',
    marginTop : 16,
  },

  actionButton: {
    flex : 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },

  payBillAgain : {
    backgroundColor: '#06c1ae',
    marginLeft : 12,
    marginRight : 10,
  },

  checkMeituanAccount: {
    backgroundColor: '#ff9900',
    marginRight: 12,
  },

  surveyText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },

});

HuiTest.propTypes = {
  orderId : React.PropTypes.string,
  amount : React.PropTypes.string,
  totalfee : React.PropTypes.string,
  bizname : React.PropTypes.string,
  tel : React.PropTypes.string,
  paytimeString : React.PropTypes.string,
  refundPath : React.PropTypes.string,
  refundTime : React.PropTypes.string,
  poiId : React.PropTypes.string,
}

export default 
