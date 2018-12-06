/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, Image, Button } from 'react-native';

import styles from './styles';




export default class AlleyChampionInfoTab extends Component<Props> {

  state = {

  };


  componentDidMount() {

  }




  render() {
    console.log(this.props)
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{
            paddingBottom: 20
          }}>
            <Text>Title</Text>

            <View
              style={{ flex : 1, flexDirection: 'row', paddingVertical: 10}}
            >
              <View style={{flex: 4}}>
                <Text style={styles.text}>Param</Text>
                <Text style={styles.text}>Value</Text>

              </View>
              <View style={{flex: 2}}>
                <Text style={styles.text}>Param</Text>
                <Text style={styles.text}>Value</Text>
              </View>

            </View>
            <View
              style={{ flex : 1, flexDirection: 'row', paddingVertical: 10}}
            >
              <View style={{flex: 4}}>
                <Text style={styles.text}>Param</Text>
                <Text style={styles.text}>Value</Text>

              </View>
              <View style={{flex: 2}}>
                <Text style={styles.text}>Param</Text>
                <Text style={styles.text}>Value</Text>
              </View>

            </View>



          </View>

          <View style={{flexDirection: 'row', paddingBottom: 20, flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'http://pluspng.com/img-png/png-pie-chart--2028.png'
              }}
              style={{width: 64, height: 64}}
            />
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/charts-and-diagrams-1-1/512/piechart-512.png'
              }}
              style={{width: 64, height: 64}}
            />

          </View>

          <View style={{
            paddingBottom: 20
          }}>
            <Text style={styles.text}>
              Лорем ипсум долор сит амет, фацете принципес не хас. Ут елит антиопам ест, ан иус фугит интерпретарис, тота аппеллантур цонцлудатуряуе сед ад. Хис номинати персеяуерис ан, иллум сонет доцтус вих ут, яуи стет лаудем дефинитионес ут. Малис мовет оратио усу ат. Уллум елитр солет ест ин.

              Вим еиус адмодум не, мел ан новум алтера интеллегебат. Вих мутат делицата ех. Яуод ерипуит сед ад, еи пурто репудиаре симилияуе усу, юсто сцрипта еу при. Медиоцрем волуптатибус пер еу, еа алияуид цомпрехенсам про, тритани интеллегат усу не. Еррем путант меа не, перпетуа салутанди ет нам, ессент видиссе цоррумпит ет хас.

              Усу ат еним дебет интеллегебат, волумус фиерент не при. Вим ан еррор еяуидем, про ментитум цоррумпит ад. Еу ириуре адиписци еам. Ех меи мунере луптатум, оцурререт тхеопхрастус ет цум, ат инани яуаестио патриояуе меа.

              Ат цоммуне адиписцинг мел, еум дицат инимицус ет, вирис либрис хендрерит меа не. Но сед реяуе ессент, еи моллис адверсариум мел. Маиорум диссентиунт вел ин. Еи яуи видиссе вулпутате, оратио симилияуе еи меи. Ерат иисяуе цорпора еа яуо. Еос виде цонцептам ут, не утрояуе мелиоре цум.

              Харум инермис вих но, при ин велит алиенум цонвенире. Еум те сале иуварет принципес, усу еним реяуе опортере еа. Но вим нонумы адмодум. Ан яуи виртуте модератиус репримияуе, еум оптион санцтус вулпутате еи, постеа адиписци цонвенире ид иус.

              Цетерос луцилиус индоцтум вис не, еа сеа нисл репримияуе. Пер ид фацете атоморум, вис еи сумо минимум, хис ассум цивибус ут. При ех дуис афферт. Мел партем хендрерит еа, ан тритани цотидиеяуе сед. Ет хомеро алияуид вел, нам ут атоморум волуптариа. Иус аццусамус детерруиссет ех, яуем фацилиси меа ут.

              Ан елит регионе цонсеяуат меи, при поссе ассуеверит ет, еум ут виси бландит. Еи бруте ехпетендис аццоммодаре вис. Ат одио мелиоре сенсибус меи, вис ад сентентиае диссентиас. Те мелиус сцаевола мел. Дуо дицо утамур адиписци ад, ад хас мутат путант дебитис.

              Про тота утинам еяуидем ид. Яуо доцтус ассентиор не. Сеа яуандо ирацундиа ат, харум ностер инцоррупте те хас. Нобис цопиосае иудицабит не иус, мел еу одио лорем.

              Ферри опортере дефинитионес те ест. Ех вис вениам латине абхорреант, ет нам модо модус. Еррем легимус еррорибус хас не. Мел тимеам лаборес те. Сит видит граеци еи, яуи антиопам неглегентур ат, еи вим мандамус сцрибентур.

              При ех солет анимал, ех делицата ехплицари репримияуе вел. Яуо еиус аццусата интеллегебат ех, еи еам суммо омниум диссентиунт. Сед саепе темпор ут, дуо популо епицури фастидии ех. Но цум хинц.
            </Text>

          </View>
          <View style={{
            paddingBottom: 20
          }}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit repudiandae velit? Alias aperiam id itaque molestiae. At atque dolorem excepturi harum ullam ut vero voluptas? Dignissimos harum impedit voluptatibus.    </Text>

          </View>
          <View style={{
            paddingBottom: 20
          }}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit repudiandae velit? Alias aperiam id itaque molestiae. At atque dolorem excepturi harum ullam ut vero voluptas? Dignissimos harum impedit voluptatibus.    </Text>

          </View>
          {/*<View style={styles.cell}>*/}
          {/*<View style={styles.nickNameBlock}>*/}
          {/*<Text style={styles.nickNameText}>Russian Hulk</Text>*/}
          {/*</View>*/}
        </View>
      </ScrollView>



    );
  }
}
