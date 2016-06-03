import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  Dimensions,
} = React;

const windowWidth = Dimensions.get('window').width;

class CommonCell extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style = {styles.orderinfoCommonCell}>
        <Text style = {styles.orderinfoLeftText}>{this.props.leftString}</Text>
        <Text style = {styles.orderinfoRightText} numberOfLines={1}>{this.props.rightString}</Text>
      </View>
    );
  }

};

var styles =  StyleSheet.create({
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
    alignItems : 'center',
    width : windowWidth,
  },
});

CommonCell.propTypes = {
  leftString : React.PropTypes.string,
  rightString : React.PropTypes.string,
};

export default CommonCell;
