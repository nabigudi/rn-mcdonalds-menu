import React from "react";
import {  StyleSheet, Text, Pressable, Image, View } from 'react-native';
import { Item } from '../types/Item'

interface ItemCardProps {
  item: Item
}

const ItemCard = ({item}: ItemCardProps) => {

  return (
    <View>
      <Pressable 
      onPress={()=>{}}
      style={({ pressed }) => [
        {
          borderColor: pressed
            ? 'rgba(255, 0, 0, 1)'
            : 'rgba(216, 216, 216, 1)'
        },
        styles.container
      ]}>
        <Image style={styles.image}
          source={{
            uri: item.url,
          }} />
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </View>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:160,
    width:160,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    // fontWeight: 'bold',
    marginTop:15,
    fontSize: 12,
    textAlign: 'center',
  }
});
