var React = require('react-native');

const
 {
   requireNativeComponent,
   Component,
   StyleSheet,
   View,
   Text,
   Image,
   TouchableHighlight,
 } = React;

class QuantityButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  render(){
    if (this.state.quantity == 0) {
      return (
          <TouchableHighlight onPress={()=>this.addQuantity()} >
            <Image source = {require('../../../asset/btn_add.png')} style = {styles.image}></Image>
          </TouchableHighlight>
      );
    }
    return (
      <View style = {styles.rootView}>
        <TouchableHighlight onPress={()=>this.decreaseQuantity()} >
          <Image source = {require('../../../asset/btn_left_decrease.png')} style = {styles.image}></Image>
        </TouchableHighlight>
        <Text style = {styles.quantitylabel}>{this.state.quantity}</Text>
        <TouchableHighlight onPress={()=>this.addQuantity()} >
          <Image source = {require('../../../asset/btn_right_add.png')} style = {styles.image}/>
        </TouchableHighlight>
      </View>
    );
  }

  decreaseQuantity(){
    var newQuantity = --this.state.quantity;
    this.setState({
      quantity: newQuantity,
    });
    this.props.decreaseQuantity();
  }

  addQuantity(){
    var newQuantity = ++this.state.quantity;
    this.setState({
      quantity: newQuantity,
    });
    this.props.addQuantity();
  }
}

var styles = StyleSheet.create({
  rootView:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  image:{
    width : 30,
    height: 30,
    resizeMode:'contain',
    marginRight: -1,
  },

  quantitylabel:{
    fontSize: 16,
    width: 30,
    height: 30,
    paddingTop: 6,
    textAlign: 'center',
    borderWidth: 1,
    borderColor:'#999999',
    marginRight: -1,
  },

  lineView:{
    height: 30,
    width: 0.5,
    backgroundColor :'#333333',
  },


});

QuantityButton.props = {
  quantity: React.PropTypes.int,
  maximumQuantity: React.PropTypes.int,
  minimumQuantity: React.PropTypes.int,
  decreaseQuantity: React.PropTypes.func,
  addQuantity: React.PropTypes.func,
}

export default QuantityButton;
