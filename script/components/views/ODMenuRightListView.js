import React from 'react-native';

const {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Dimensions,
  Component,
} = React;

// import ODMenuRightListViewCell from './cells/ODMenuRightListViewCell';
import ODMenuRightListViewCell from '../cells/oddishcell';
import {spuMenuItemList, menuCategroys, spuNames} from '../../services/ODMenuItem';

export default class ODMenuRightListView extends Component {
  constructor(props){
    super(props);

    var getSectionData = (spuMenuItemList, sectionID) => {
      return spuMenuItemList[sectionID];
    }
    var getRowData = (spuMenuItemList, sectionID, rowID) => {
      return spuMenuItemList[sectionID][rowID];
    }
    var ds = new ListView.DataSource({
      getSectionData: getSectionData,
      getRowData: getRowData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 != s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(spuNames),
      currentIndex: 0,
    }
  }

  componentDidUpdate() {
    let scrollResponder = this.refs.listView.getScrollResponder();
    scrollResponder.scrollResponderScrollTo({x: 0, y:this.pscroll(), animated: true});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.needUpdate;
  }

  pscroll() {
    console.log(this.props.section);
     var height = 0;
     for (var x in spuMenuItemList) {
       if (parseInt(x) < parseInt(this.props.section)) {
         height += spuMenuItemList[x].length * 100;
         height += 20;
       }
     }
     return height;
   }

    render() {
      return (
        <View style = {styles.listView}>
          <ListView
          ref="listView"
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
          onScroll={this._onScroll.bind(this)}
          initialListSize={7}
          pageSize={7}
          />
        </View>
      );
    }

    _onScroll(event: Object) {
      var scrollProperties = this.refs.listView.scrollProperties;
      // console.log(scrollProperties);
      // console.log(scrollProperties.offset);
      // console.log(this.props.section)

      if (this.props.fromLeftTouched) {
        return;
      }

      var height = 0;
      for (var x in spuMenuItemList) {
        height += spuMenuItemList[x].length * 100;
        height += 20;
        if (height > scrollProperties.offset) {
          if (x != this.state.currentIndex) {
            this.props.needChangeSection(parseInt(x));
            this.state.currentIndex = parseInt(x);
          }
          break;
        }
      }
    }

    _renderSectionHeader(sectionData: string, sectionId: number) {
       return (
         <View style = {styles.sectionHeaderView}>
           <Text style={styles.sectionHeaderStyle}>{menuCategroys[sectionId]}</Text>
         </View>
       );
     }

    _renderRow(rowData: any, sectionID: number, rowID: number) {
      return (
        <TouchableHighlight
          underlayColor={'rgba(216.75, 216.75, 216.75, .22)'}
          onPress={() => this._pressRow(rowID)}>
          <View style = {styles.container}>
            <ODMenuRightListViewCell spuMenuItem = {spuMenuItemList[sectionID][rowID]}>
            </ODMenuRightListViewCell>
          </View>
        </TouchableHighlight>
      );
    }

    _pressRow(rowID: number) {
      console.log(rowID);
    }
};

ODMenuRightListView.propTypes = {
  section: React.PropTypes.number.isRequired,
};

var styles = StyleSheet.create({
  listView: {
    width: 0.7 * Dimensions.get('window').width,
  },
  container: {
    width: 0.7 * Dimensions.get('window').width,
    height: 100,
  },
  sectionHeaderStyle: {
    fontSize: 12,
    color:'#999999',
  },
  sectionHeaderView:{
    height: 20,
    backgroundColor:'#f1f1f1',
    justifyContent: 'center',
    paddingLeft: 10,
  },

});
