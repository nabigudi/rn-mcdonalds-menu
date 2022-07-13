import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { emptyItem, SelectedItemContext } from './AppContext';
import Header from './components/Header';
import ItemList from './components/ItemList';
import ModalItem from './components/ModalItem';
import { Item } from './types/Item';

interface MenuProps {
  name: string;
  items: Item[];
}

export default function App() {
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Item>(emptyItem);

  const getMenuList = async () => {
    try {
      const menuList = require('./api/menu.json');
      setMenu(menuList.menus.sort((a: { name: string; },b: { name: string; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
    } catch ( error ) {
      console.error(error);
    }
  }

  useEffect(() => {
      getMenuList();
  }, [])

  const toggleModal = (item: Item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  }

  return (
    <SelectedItemContext.Provider value={selectedItem}>
      <View style={styles.container}>
        <Header />
        
        <FlatList
          data={menu}
          renderItem={({ item } : {item: MenuProps} ) => (
            <ItemList itemList={item.items} name={item.name} toggleModal={toggleModal}/>
          )}
          keyExtractor={item => item.name}
        />
        <ModalItem modalVisible={modalVisible} closeModal={() => setModalVisible(false)}/>
      </View>
    </SelectedItemContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    fontWeight: 'bold',
    marginVertical:15,
    fontSize: 30,
    marginHorizontal: 15,
  }
});