import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Item } from '../types/Item';
import ItemCard from "./ItemCard";

interface ItemListProps {
  name: string
  itemList: Item[];
  toggleModal: (item: Item) => void;
}

const ItemList = ({ itemList, name, toggleModal } : ItemListProps) => {
  const list = itemList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <FlatList
          horizontal={true}
          data={list}
          renderItem={({ item } : {item: Item} ) => (
            <ItemCard item={item} toggleModal={() => toggleModal(item)}/>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => <View style={styles.space}></View>}
        />
    </View>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 35,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  space: {
    width:15
  },
  nospace: {
    width:15
  }
});