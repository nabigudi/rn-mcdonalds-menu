import React, { useContext } from "react";
import { Modal, StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { SelectedItemContext } from "../AppContext";
import { Item } from '../types/Item';

interface ItemDescriptionProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const ItemDescription = ({ modalVisible, closeModal } : ItemDescriptionProps) => {

  const selectedItem:Item = useContext(SelectedItemContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
        <View style={styles.container}>
          <View
            style={styles.modal}>
            <Pressable 
              onPress={closeModal}
              style={styles.closeButton}>
                <Text style={styles.close}>X</Text>
            </Pressable>
            <View style={styles.content}>
              <ScrollView style={styles.scroll}>
                <Image style={styles.image}
                  source={{
                    uri: selectedItem.url,
                  }} />
                <Text style={styles.title}>{selectedItem.name}</Text>
                <View style={styles.price}>
                  <Text>${selectedItem.price}</Text>
                </View>
                <Text style={styles.description}>{selectedItem.description}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
    </Modal>  
  );
}

export default ItemDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor:'rgba(0, 0, 0, 0.3)'
  },
  modal: {
    height: '95%',
    marginTop: 'auto',
    backgroundColor:'#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  closeButton: {
    marginRight: 10,
    marginTop: 10,
    height:'auto',
    alignSelf: 'flex-end',
    color: 'black',
  },
  close: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    padding: 20,
  },
  image: {
    width: '90%',
    height: 200,
    alignSelf: 'center'
  },
  price: {
    borderColor: 'rgba(216, 216, 216, 1)',
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical:3
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15,
    alignSelf: 'center',
    textAlign: 'center'
  },
  description: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 15,
  },
});

