import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'

const FlatlistChildComponent =(props)=>{
    const getIdEven = id => {
        if (id % 2 == 0) {
          return true;
        }
        return false;
      };

    return (
    <View style={styles.renderRowStyles}>
        <View
              style={[styles.mainView,{
                  justifyContent: getIdEven(props.item.group) ? 'space-around' : 'space-between',
                  paddingLeft: getIdEven(props.item.group) ? 20 : 0,
                }
                  ]}>
              {Object.keys(props.item.data).map((keyItem) => {
                return (
                  <TouchableOpacity onPress={()=>props.onPress(props.item.data[keyItem])} style={styles.childView}>
                    <Text style={{fontWeight: props.isSelected == props.item.data[keyItem] ? 'bold' : 'normal'} }>{props.item.data[keyItem]}</Text>
                  </TouchableOpacity>
                );
              })}
        </View>
    </View>
        )
        }

const styles = StyleSheet.create({
            renderRowStyles:{ marginVertical: 12, },
            mainView:{
                flexDirection: 'row',
                alignItems: 'center',
              },
              childView:{flexDirection: 'row'},
})

export default FlatlistChildComponent
