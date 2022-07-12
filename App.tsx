import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
// import MenuService from './api/menu';
import Logo from "./assets/logo.svg";
import ItemCard from './components/ItemCard';


export default function App() {

  const [menu, setMenu] = useState([]);

  const getMenuList = async () => {
    try {
      const menuList = require('./api/menu.json');
      setMenu(menuList.menus);
    } catch ( error ) {
      console.error(error);
    }
  }

  useEffect(() => {
      getMenuList();
  }, [])

  const renderList = ({ item }) => (
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <FlatList
        horizontal={true}
        data={item.items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
        renderItem={ItemCard}
        keyExtractor={item => item.name}
        extraData={item.name}
        ItemSeparatorComponent={() => <View style={{width:15}}></View>}
        ListHeaderComponent={() => <View style={{width:15}}></View>}
        ListFooterComponent={() => <View style={{width:15}}></View>}

      />
  </View>
  );

  return (
      <View style={styles.container}>
        <Logo width={100} height={100} />
        <FlatList
          data={menu.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
          renderItem={renderList}
          keyExtractor={item => item.name}
        />
        <StatusBar style="auto" />
      </View>
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
