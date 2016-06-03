import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import ODDoubleListView from '../components/views/ODDoubleListView';

export default class ODMenuModule extends Component {
  constructor (props) {
      super(props);
      this.state = {
         porps: ''
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <ODDoubleListView> {this.state.props} </ODDoubleListView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
  },
});
