//CategroyItem
import React from 'react';
import {
 Component,
 StyleSheet,
 View,
 Text,
 TouchableHighlight,
} from 'react-native'

export default class CategroyItem extends Component {

 constructor(props) {
   super(props);
   this.state = {
     selected: false,	//这里只是用来和props的selected进行对比，并没有被重新赋值
   }
 }

 render() {
   let selected = this.props.selected;
   let itemStyle = [styles.item];
   let itemTitle = [styles.title];

   if (this.state.selected != selected) {
     itemStyle.push({borderLeftWidth: 5, borderLeftColor: '#ff6633'});
     itemTitle.push({color: 'red', marginTop: 2})
   }

   return (
     <TouchableHighlight
       underlayColor={'rgba(216.75, 216.75, 216.75, .22)'}
       onPress={this.props.touchAction}
       activeOpacity={0.5}
     >
       <View style={itemStyle}>
         <Text style={itemTitle}>{this.props.category}</Text>
         <View style={styles.sperator} />
       </View>
     </TouchableHighlight>
   )
 }
}

const styles = StyleSheet.create({
 item: {
   flex: 1,
   justifyContent: 'center',
 },
 title: {
   flex: 1,
   fontSize: 15,
   padding: 12,
   fontWeight: 'bold',
 },

 sperator: {
   height: 1,
   backgroundColor: '#000066',
 }
})
