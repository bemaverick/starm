/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , Image, ImageBackground, Text, View, Dimensions, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { HeaderC, ChampionItem } from './../../components';
import { Colors } from './../../constants';
import styles from './styles';

const logoURL = "https://www.westada.org/cms/lib/ID01904074/Centricity/Template/GlobalAssets/images///logos/logo_mountainview-04.png";


export default class MemberMain extends Component<Props> {

  state = {
    keys: [],
    data: {},
    flags: [
      {
        title: 'Joshuas  Chinni asd sa asd sadsa sa das dsa sad sad as ',
        flag: 'https://images.ua.prom.st/69350339_w640_h640_flag.gif',
        avatar: 'https://www.sb.by/upload/iblock/62d/62d506eb4047a19795a5ce647355cf41.jpg'
      },
      {
        title: 'Illon Mask',
        flag: 'https://us.123rf.com/450wm/pteshka/pteshka1606/pteshka160600079/59031905-usa-flag-square-shape-classic-american-flag-on-isolated-background-american-flag-vector-illustration.jpg',
        avatar: 'https://cdn.vox-cdn.com/thumbor/DVN7eqE1o8HeBOP-jg15YHTsiLY=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg'
      },
      {
        title: 'Arnold',
        flag: 'https://us.123rf.com/450wm/dikobrazik/dikobrazik1710/dikobrazik171000220/87860658-russia-flag-vector-square-flat-icon-illustration.jpg?ver=6',
        avatar: 'https://postmediawindsorstar2.files.wordpress.com/2018/10/arnold.jpg?quality=80&strip=all&w=840&h=630&crop=1'
      },
      {
        title: 'Serhii Morykon',
        flag: 'https://images.ua.prom.st/69350339_w640_h640_flag.gif',
        avatar: 'https://instagram.fiev5-1.fna.fbcdn.net/vp/9b6e80a311592d8a574c59302ec895df/5CA6DF6B/t51.2885-19/s150x150/44370112_2288442681401797_4878546015998705664_n.jpg'
      }
    ]
  };


  componentDidMount() {
    // topChampions.on('value', (childrenSnapshot) => {
    //   console.log(childrenSnapshot)
    //   this.setState({
    //     keys: childrenSnapshot._childKeys,
    //     data: childrenSnapshot._value
    //   })
    // })
    //
    // topChampions.once('value', function (snapshot) {
    //   console.log(snapshot.val())
    // });
  }

  renderItems = ({item, index}) => {
    const { data } = this.state;
    return (
      <View style={{
       // backgroundColor: '#024',
        marginHorizontal: 0,
        marginLeft: 8,
        marginBottom: 8,
        borderRadius: 0,
        // paddingRight: 8,
        // borderTopRightRadius: 4,
        // borderBottomRightRadius: 4,
        overflow: 'hidden',
        height: null}}>

        <View style={{
          height: 64,
          padding: 8,
          paddingLeft: 40,
          paddingRight: 105,
          marginLeft: 32,
          flex: 1,
          backgroundColor: '#024',
        }}>
          <Text style={{ color: Colors.white}} numberOfLines={1}>{this.state.flags[index].title}</Text>
          <Text style={{ color: "#aff", paddingLeft: 3}}>{25}</Text>
          <Text style={{ color: Colors.white}}>Kiev</Text>
        </View>

        <View style={{position: 'absolute', top: 0, left: 0,}}>
          <Image style={{width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center'}} source={{uri: this.state.flags[index].flag}} />
          <Image style={{width: 60, position: 'absolute', top: 2, left: 2, height: 60, borderRadius: 30}} source={{uri: this.state.flags[index].avatar}}/>

        </View>

        <View style={{
          width: 120,
          height: 32,
          backgroundColor: '#025',
          position: 'absolute',
          top: 10,
          paddingLeft: 10,

          right: 18,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [ { rotate: '70deg'}]
        }}>
          <Text style={{ color: Colors.white}}>
            86 kg
          </Text>
        </View>

        <View style={{
          width: 120,
          height: 32,
          paddingLeft: 10,
          backgroundColor: '#034',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: 10,
          right: -13,
          transform: [ { rotate: '70deg'}]
        }}>

          <Text style={{ color: Colors.white}}>
            1.8 м
          </Text>
        </View>

        <View style={{
          width: 120,
          height: 32,
          paddingLeft: 10,
          backgroundColor: '#044',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: 10,
          right: -45,
          transform: [ { rotate: '70deg'}]
        }}>
          <Text style={{ color: Colors.white, fontSize: 10}}>
            World C
          </Text>
        </View>



        {/*<View style={{position: 'absolute', top: -28, right: -110, width: 120, height: 120, borderRadius: 60, backgroundColor:  '#035'}}>*/}
          {/*<Image style={{width: 60, position: 'absolute', top: 2, left: 2, height: 60, borderRadius: 30}} source={{uri: this.state.flags[index].avatar}}/>*/}
        {/*</View>*/}



      </View>
    )
  }


  render() {
    const { navigation } = this.props;
    const rightIcon = (<MaterialIcon name="person-add" size={24} color="#099" />);
    return (
      <View style={styles.container}>
        <HeaderC
          backgroundColor={Colors.darkBlue}
          leftItemImageURI={logoURL}
          title="Alley of glory"
          rightIcon={rightIcon}
          rightIconAction={() => navigation.navigate('AlleyAddChampion')}
        />

        <FlatList
          style={{paddingTop: 10}}
          keyExtractor = {(item, index) => item}
          data={[1, 2, 4, 5]}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}
