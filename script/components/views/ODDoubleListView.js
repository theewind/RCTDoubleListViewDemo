//ODDoubleListView
// 'use strict';

import React from 'react-native';

const {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Component,
} = React;

import ODMenuLeftListView from './ODMenuLeftListView';
import ODMenuRightListView from './ODMenuRightListView';

export default class ODDoubleListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRightSection: 0,
      needUpdateRight: true,
      leftTouch: false,
      timeoutID: null,
    };
  }

  sectionChanged(newState) {
    if (this.state.currentRightSection != newState) {
      this.setState({
        currentRightSection : newState,
        needUpdateRight: true,
        leftTouch: true,
      })

      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => {
        this.setState({
          leftTouch: false,
        })
      }, 500);
    }
  }

  needChangeSection(newState) {
    // console.log(newState);
    // console.log(this.state.currentRightSection);
    if (this.state.currentRightSection != newState) {
      this.setState({
        currentRightSection: newState,
        needUpdateRight: false,
        leftTouch: false,
      })
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <ODMenuLeftListView
          section = {this.state.currentRightSection}
          callbackParent = {this.sectionChanged.bind(this)}>
        </ODMenuLeftListView>
        <View style = {styles.separator}></View>
          <ODMenuRightListView
            section = {this.state.currentRightSection}
            needUpdate = {this.state.needUpdateRight}
            fromLeftTouched = {this.state.leftTouch}
            needChangeSection = {this.needChangeSection.bind(this)}>
          </ODMenuRightListView>
      </View>
    );
  }
};

ODDoubleListView.propTypes = {
  currentRightSection: React.PropTypes.number,
};

var wwidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  separator: {
    width: 2,
    backgroundColor: '#000000',
  },
});
