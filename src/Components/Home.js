import React, {useEffect, useState} from 'react';
import {Text, View,StyleSheet,FlatList} from 'react-native';
import FlatlistChildComponent from '../ReusableComponents/FlatlistChildComponent'

const Home = () => {
  const [array, setArray] = useState([]);
  const [isSelectedState, seIsSelectedState] = useState(null);

  useEffect(() => {
    let myArray = [];
    let count = 1;

    for (let i = 1; i <= 40; i++) {
      let obj = {};
      obj.data = i;
      if (i % 5 == 0) {
        obj.group = count;
        count = count + 1;
      } else {
        obj.group = count;
      }
      myArray.push(obj);
    }

    var group_to_values = myArray.reduce(function(obj, item) {
      obj[item.group] = obj[item.group] || [];
      obj[item.group].push(item.data);
      return obj;
    }, {});

    var groups = Object.keys(group_to_values).map(function(key) {
      return {
        group: key,
        data: Object.assign(...group_to_values[key].map((v, i) => ({[i]: v})))
      };
    });
    setArray(groups);
  }, []);

  const onPress =(id)=>{
    seIsSelectedState(id)
  }

  const renderListRow = (item, id) => {
    return (
      <FlatlistChildComponent item={item}
      id={id}
      onPress={onPress}
      isSelected={isSelectedState}
      />
    )
  };

  return (
    <FlatList
      style={styles.flatListStyle}
      data={array.length > 0 ? array : []}
      renderItem={({item, id}) => renderListRow(item, id)}
      keyExtractor={(item, id) => item + id}
    />
  );
};

const styles = StyleSheet.create({
renderRowStyles:{ marginVertical: 12, },
mainView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  childView:{flexDirection: 'row'},
  flatListStyle:{marginLeft:30,marginRight:30,marginVertical:30}
})

export default Home;