import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';


// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case "setPersonData":
//       return { ...state, personData: action.value };
//     default:
//       return state;
//   }
// };




const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistConfig = {
  whitelist: ['auth'],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);




//
//
//
// const setPersonData = (personData) => {
//   return {
//     type: "setPersonData",
//     value: personData
//   };
// };
//
//
// const watchPersonData = () => {
//   return (dispatch) => {
//     firebase
//       .database()
//       .ref("person")
//       .on("value", (snapshot) => {
//         let personData = snapshot.val();
//         let actionSetPersonData = setPersonData(personData);
//         dispatch(actionSetPersonData);
//       }, (error) => {
//         console.log(error);
//       });
//   }
// };


// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// export { store };
//


export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

