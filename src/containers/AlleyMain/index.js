/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import { HeaderC, ChampionItem, IconC } from './../../components';
import { loginUser, logoutUser } from '../../redux/actions/auth'
import { topChampions } from './../../database/category';
import styles from './styles';

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts,
});

const mapDispatchToProps = {
  loginUser,
  logoutUser,
};

class AlleyMain extends Component<Props> {

  state = {
    keys: [],
    data: {}
  };


  componentDidMount() {
    const { currentUser } = firebase.auth()
    console.log( currentUser );
    // real time updating
    topChampions.on('value', (childrenSnapshot) => {
      console.log(childrenSnapshot)
      this.setState({
        keys: childrenSnapshot._childKeys,
        data: childrenSnapshot._value
      })
    })



    //fetch data once
    topChampions.once('value', function (snapshot) {
      console.log(snapshot.val())
    });
  }

  renderItems = ({item, index}) => {
    const { data } = this.state;
    const { navigation } = this.props;
    const championData = data[item];
    return (
      <ChampionItem
        onPress={() => this.props.navigation.navigate("AlleyChampion", {championData})}
        imageURI={data[item].avatar_url}
        title={data[item].last_name}
      />
    )
  }


  render() {
    const { navigation } = this.props;
    const rightIcon = (<IconC type="MI" name="person-add" size={24} color="#099" />);
    return (
      <View style={styles.container}>
        <HeaderC
          leftLogo
          title="Alley of glory"
          rightIcon={rightIcon}
          rightIconAction={() => navigation.navigate('AlleyAddChampion')}
        />

        <FlatList
          numColumns={3}
          keyExtractor = {(item, index) => item}
          data={this.state.keys}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlleyMain);
