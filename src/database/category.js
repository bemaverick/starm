import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const topChampions = rootRef.child('Users');

export {
  topChampions
}
