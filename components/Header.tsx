import React from "react";
import { StyleSheet, View } from 'react-native';
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    alignItems: 'center', 
    paddingBottom: 10, 
    paddingTop: 20, 
    borderBottomWidth: 1, 
    borderColor: 'rgba(216, 216, 216, 1)'
  },
});