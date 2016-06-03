import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Component,
} from 'react-native';

import {menuCategroys} from '../../services/ODMenuItem';
import ODMenuLeftListViewCell from '../cells/ODMenuLeftListViewCell';
import CategroyItem from './CategroyItem';

export default class ODMenuLeftListView extends Component {
  constructor(props){
      super(props);
      this.state = {
        section: 0,
      }
    }

    render() {
        return(
          <ScrollView
              horizontal={false}
              automaticallyAdjustContentInsets={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              style={styles.scrollView}>
              {
                  menuCategroys.map((category, i) => {
                      return (
                          <CategroyItem
                              key={category}
                              selected={i == this.props.section}
                              category={category}
                              touchAction={this._pressRow.bind(this, i)}
                          />
                      )
                  })
              }
          </ScrollView>
        )
      }

    _pressRow(rowID: number) {
        this.setState({
          section: rowID,
        });
        this.props.callbackParent(rowID)
    }
};

var styles = StyleSheet.create({
    scrollView: {
      flexDirection: 'column',
      flex: 1,
      borderBottomWidth: 0.5,
  },
});
