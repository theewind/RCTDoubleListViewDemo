//ODMenuRightListViewCell

import React from 'react-native';

const {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
} = React;

export default class ODMenuRightListViewCell extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.rowPressed()}
              underlayColor='#dddddd'>
            <View>
              <View style={styles.rowContainer}>
                <Image style={styles.thumb} source={{ uri: this.props.sku.picUrl }} />
                <View  style={styles.textContainer}>
                  <Text style={styles.price}>￥{this.props.sku.currentPrice}</Text>
                  <Text style={styles.title}
                        numberOfLines={1}>{this.props.sku.skuName}</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </View>
      </TouchableHighlight>
    );
  }

  rowPressed() {

  }
};

ODMenuRightListViewCell.propTypes = {
  sku: React.PropTypes.object,
};

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
  }
});
