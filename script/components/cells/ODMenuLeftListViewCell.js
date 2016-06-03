// ODMenuLeftListViewCell

import React from 'react-native';

const {
  StyleSheet,
  Text,
  View,
  Component,
} = React;

export default class ODMenuLeftListViewCell extends Component {
  render() {
    var line = this.props.selected ? <View style = {styles.leftLine} /> : null;
    return(
      <View style = {styles.container}>
        {line}
        <View style = {styles.row}>
          <Text style = {styles.text}>{this.props.title}</Text>
          <View style = {styles.sperator} />
        </View>
      </View>
    )
  }
};

ODMenuLeftListViewCell.propTypes = {
  title: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
};

var styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
  },

  row: {
    flex: 1,
  },

  leftLine: {
    width: 6,
    // height: 45,
    backgroundColor: '#ff6633',
    alignItems: 'stretch',
  },

  text: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 15,
  },

  sperator: {
    height: 1,
    backgroundColor: '#000066',
  }
});
