//ODMenuItem.js
import models from './model.json'

const spuMenuSet = models.spuMenuSet;
const menuCategroys = spuMenuSet.map(function(array, index){
  return array.name;
});

const spuMenuItemList = spuMenuSet.map(function(array, index){
  return array.spuMenuItemList;
})

const spuNames = spuMenuSet.map(function(array, index){
  return array.spuMenuItemList.map(function(skus,i){
    return skus.spuName;
  });
})

export {menuCategroys, spuMenuItemList, spuNames};
