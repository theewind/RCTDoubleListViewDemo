import React from 'react-native';

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
  ListView,
} = React;

import QuantityButton from '../views/quantitybutton';


class ODDishCell extends React.Component {

  // constructor(props) {
  //   super(props);
  // }



  render(){
    const spu = this.props.spuMenuItem;
//     const spu = models;

    const dishImageView = (
      <Image
        style={styles.image}
        source={{uri: spu.picUrl}}
        resizeMode={'cover'}
        defaultSource={{uri: '../../../asset/dc_picture.png'}}
        loadingIndicatorSource={{uri: '../../../asset/dc_picture.png'}}>
      </Image>
    );

    const firstLine = (
      <View style={styles.topInfoView}>
        <Text style = {styles.dishnamelabel}>{spu.spuName}</Text>
         <Image source={require('../../../asset/order_home_icon_lajiao.png')} style = {styles.chilli}></Image>
      </View>
    );

    const secondLine = (
      <View style = {styles.secondLineView}>
        {(()=>{
          if (spu.recomCount > 0) {
            return (
              <View style style = {styles.rowView}>
                <Image source={require('../../../asset/od_icon_smallzan.png')} style = {styles.imageLike}></Image>
                <Text style = {[styles.detailText,styles.liketext]}>{spu.recomCount}</Text>
              </View>
            );
          }
        })()}
        {(()=>{
          if (spu.dishSales && spu.dishSales.length > 0) {
            return(
              <View>
                <Text style = {styles.detailText}>{spu.dishSales}</Text>
              </View>
            );
          }
        })()}
      </View>
    );

    const thirdLine = (
      <View style = {styles.thirdLine}>
      {(()=>{
        if (spu.tags && spu.tags.length > 0) {
          return (
            <View style = {styles.rowView}>
              <Text style = {styles.tagView}>{spu.tags[0]}</Text>
              {(()=>{
                if (spu.tags && spu.tags.length > 1) {
                  return (
                    <Text style = {styles.tagView}>{spu.tags[1]}</Text>
                  );
                }
              })()}
            </View>
          );
        }
      })()}
      {(()=>{
        if (spu.validity) {
          if(spu.limitDesc && spu.limitDesc.length > 0){
            return (
              <Text style = {styles.detailText}>{spu.limitDesc}</Text>
            );
          } else if(spu.tagInfos && spu.tagInfos.length > 0){
            return (
              <Text style = {styles.detailText}>{spu.tagInfos[0].buyCountDesc}</Text>
            );
          }
        } else {
          return (
              <Text style = {styles.detailText}>未开售</Text>
          );
        }
      })()}
      </View>
    );

    const fourthLine = (

      <View style = {styles.fourthLine}>
      {(()=>{
        const ODSkuMenuItemDishTypeVariablePricePackageWithOptions = 2;
        var currentPrice = parseFloat(spu.currentPrice);
        var packagePrice = parseFloat(spu.packagePrice);
        var originPrice = parseFloat(spu.originPrice);
        var maxOriginPrice = Math.max(originPrice,packagePrice);
        if (spu.dishType == ODSkuMenuItemDishTypeVariablePricePackageWithOptions) {
          return (
              <Text style = {styles.priceView}>{'¥'+spu.minPackagePrice+'-'+spu.maxPackagePrice}</Text>
          );
        } else {
          return (
            <View style = {styles.rowView}>
              <Text style = {styles.priceView}>{'¥'+maxOriginPrice}</Text>
              {(()=>{
                if (maxOriginPrice > currentPrice) {
                  return (
                    <Text style = {styles.originPriceView}>{'¥'+currentPrice}</Text>
                  );
                }
              })()}
            </View>

          );

        }
      })()}
      </View>
    );

    const addQuantity = ()=>{
      console.log('add');
    }

    const decreaseQuantity = ()=>{
      console.log('decrease');
    }

    return (
      <TouchableHighlight
        underlayColor={'rgba(216.75, 216.75, 216.75, .22)'}>
        <View style = {styles.container}>
          <View style={styles.rootView}>
            {dishImageView}
            <View style={styles.infoRootView}>
              {firstLine}
              {secondLine}
              {thirdLine}
              {fourthLine}
            </View>
            <View style = {styles.buttonView}>
              <QuantityButton addQuantity = {addQuantity} decreaseQuantity = {decreaseQuantity} style = {styles.quantitybutton}/>
            </View>
          </View>
          <View style={styles.space} />
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({

  container:{
    flexDirection:'column',
  },

  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },

  rowView: {
    flexDirection: 'row',
    alignItems : 'center',
  },

  image: {
    width: 66,
    height: 66,
    marginTop: 10,
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  detailText: {
    fontSize: 10,
    color: '#999999',
  },

  // 右侧
  infoRootView: {
    flex: 1,
  },

  topInfoView: {
    flexDirection: 'row',
    marginBottom: 7,
  },

  dishnamelabel:{
    fontSize: 14,
    color: '#333333',
    marginRight: 5,
  },

  chilli: {
    width: 14,
    height: 14,
  },

  secondLineView: {
    flexDirection: 'row',
    marginBottom: 7,
  },

  imageLike: {
    marginRight : 2,
  },

  liketext:{
    marginRight : 4,
  },

  thirdLine:{
    flexDirection: 'row',
    marginBottom: 7,
    alignItems : 'center',
  },

  dishTagsView:{
    fontSize: 11,
    color: '#ff6633',
    marginRight: 4,
  },

  tagView:{
    fontSize:11,
    color:'#ff6633',
    borderRadius:2,
    borderColor:'#ff6633',
    borderWidth:1,
    marginRight:3,
    paddingLeft:3,
    paddingRight:3,
    paddingTop:2,
    paddingBottom:1,
    textAlign:'center',
  },

  fourthLine:{
    flexDirection: 'row',
  },

  space:{
    height : 0.5,
    backgroundColor : '#999999',
    marginLeft: 10,
  },

  priceView:{
    fontSize: 14,
    color: '#ff6633',
  },

  originPriceView:{
    fontSize: 12,
    color : '#999999',
    marginLeft: 2,
    textDecorationLine : 'line-through',
  },

  buttonView:{
    paddingTop: 30,
  },

  quantitybutton:{
    marginTop:300,
  },

});

ODDishCell.propTypes = {
  spuMenuItem : React.PropTypes.object,
}

export default ODDishCell;
