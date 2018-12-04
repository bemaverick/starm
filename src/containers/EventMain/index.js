/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, TouchableOpacity, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { HeaderC, ButtonC, IconC, EventItem } from './../../components';

import { Colors } from './../../constants';
import styles from './styles';


export default class EventMain extends Component<Props> {

  state = {
    data: [

      {
        image: 'http://www.zlotytur.com/uploads/Zloty-Tur-news-5.jpg',
        title: 'Zloty Tur',
        date: '07.11.2019',
        location: 'Poland',
        cash: '120 000'
      },
      {
        image: 'http://livedoor.blogimg.jp/armwrestling/imgs/6/b/6b6da2fd.png',
        title: 'Arnold Classic Armwrestling',
        date: '02.02.2019',
        location: 'USA',
        cash: '1 000 000'
      },
      {
        image: 'http://en.armpower.net/img/465x305/c28861_ermes-gasparini-vs-kydyrgaly-ongarbaev-sokol-maric-2016.jpg',
        title: 'ZT Strong',
        date: '10.20.2019',
        location: 'Italy',
        cash: '7 000'
      },
      {
        image: 'http://www.visniaphotos.com/wp-content/uploads/2018/09/DSC8346.jpg',
        title: 'Moldova open Cup',
        date: '15.09.2019',
        location: 'Moldova',
        cash: '500 000'
      },
      {
        image: 'https://i.ytimg.com/vi/LJNeXxokjNY/hqdefault.jpg',
        title: 'Lviv Open Cup',
        date: '28.06.2019',
        location: 'Ukraine',
        cash: '90 000'
      },
      {
        image: 'http://ru.armpower.net/img/465x305/77eBEx_img_1392.jpg',
        title: 'Kharkov Iron Man',
        date: '23.09.2019',
        location: 'Ukraine',
        cash: '80 000'
      },
      {
        image: 'https://uproxx.files.wordpress.com/2018/04/wal-billboard-jpg.jpeg?quality=95&w=650',
        title: 'WAL Armwrestling',
        date: '05.14.2019',
        location: 'Canada',
        cash: '120 000'
      },
      {
        image: 'http://www.combatandstrength.com/wp-content/uploads/2018/05/17272933762_961664d513_o-700x500.jpg',
        title: 'Arm Wars',
        date: '05.14.2019',
        location: 'USA',
        cash: '120 000'
      },
      {
        image: 'https://en.armpower.net/img/465x305/be3ed0_todd-tsyp.jpg',
        title: 'Vendetta',
        date: '05.14.2019',
        location: 'Poland',
        cash: '120 000'
      }




    ]

  };
  renderItems = ({item, index}) => {
    return (
      <EventItem
        isFirst={!index}
        {...item}
         imageURL={item.image}
      />
    )
  };

  // renderHeader = () => (
  //   <View style={styles.headerWrap}>
  //     <ButtonC
  //       icon={<IconC type="FA5" name="calendar-plus" size={20} />}
  //       title="add Event"
  //     />
  //   </View>
  // )
  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <HeaderC
          transparent
          backgroundColor={'rgba(0, 0, 0, .6)'}
          leftLogo
          title="Arm event"
        />
        <FlatList
          keyExtractor = {(item, index) => item.image}
        //  ListHeaderComponent={this.renderHeader}
          data={this.state.data}
          renderItem={this.renderItems}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            bottom: 20,

          }}
        >
          <IconC type="MI" size={48} color={"#ddd"} name="add-circle"/>

        </TouchableOpacity>

      </View>
    );
  }
}
