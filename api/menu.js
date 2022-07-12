// import axios from 'axios';

// const getMenu = () => {
//     return axios.get('http://192.168.43.49:19002/menu.json');
// }

//import * as RNFS from 'react-native-fs';

const getMenu = () => {
  // RNFS.readFile('/menu.json', 'ascii')
  //     .then((res) => {
  //       console.log(res);
  //       const d = JSON.parse(res);
  //       this.setState({ content: res, fruitType: d.type });
  //     })
  //     .catch((err) => {
  //       console.log(err.message, err.code);
  //     });
}

const MenuService = {
    getMenu
}

export default MenuService;