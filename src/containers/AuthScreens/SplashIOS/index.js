import React from 'react'
import { View, MaskedViewIOS, Easing, Animated } from 'react-native';

import METRICKS from "../../../constants/metricks";
import styles from "./styles";



export default class SplashIOS extends React.Component {
  splashImages = [
    'https://pbs.twimg.com/media/Ds7Mn0hWsAAhgOd.jpg',
    "https://uproxx.files.wordpress.com/2018/04/wal-billboard-jpg.jpeg?quality=95&w=650",
    "https://i.ytimg.com/vi/fcjJYsKY84o/maxresdefault.jpg",
    "http://fit-on.ru/wp-content/uploads/2015/07/A1-Russian-Open-1.jpg",
    "https://i.pinimg.com/originals/4c/39/99/4c3999f62aa5d89a6389603a70d007ef.jpg",
    "http://en.armpower.net/img/465x305/c0eca5_walka.jpg",
  //  "http://4.bp.blogspot.com/-UI6CK-ch2_Q/Uvewvkc67CI/AAAAAAAASTo/W1CPsJalpjI/s1600/DSC_0384.jpg",
    //"http://www.visniaphotos.com/wp-content/uploads/2018/09/DSC9432.jpg"
  ];

  appName = 'POPEYE';
  fontScale = this.appName.split('').map(() => new Animated.Value(0));
  fontOpacity = this.appName.split('').map((el, i) => new Animated.Value(!i ? 1 : 0));
  imageOpacity = this.appName.split('').map((el, i) => new Animated.Value(!i ? 1 : 0));

  componentDidMount() {
    setTimeout(() => {
      this.runAnimation(0)
    }, 420)
  }

  // stagger delay + imageOpacity Duration + 50 ~ fontScale Duration

  runAnimation(i) {
    const animationLength = this.appName.length;
    Animated.stagger(600, [
      Animated.timing(
        this.fontScale[i],
        {
          toValue: 1,
          duration: 850,
          easing: Easing.easeIn,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        this.imageOpacity[i + 1 === animationLength ? animationLength - 1 : i + 1 ],
        {
          toValue: 1,
          duration: 200,
          easing: Easing.easeIn,
          useNativeDriver: true,
        }
      )

    ]).start(() => {
      this.fontOpacity[i].setValue(0);
      if (i < animationLength - 1) {
        this.fontOpacity[i + 1].setValue(1);
        this.runAnimation(i + 1)
      } else {
        this.props.navigation.navigate('Loading')
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <MaskedViewIOS
          style={styles.maskedViewStyle}
          maskElement={
            <View style={styles.maskElement}>
              {
                this.appName.split('').map((el, i) => (
                  <Animated.Text
                    style={[
                      styles.text,
                      {
                        transform: [{
                          scale: this.fontScale[i].interpolate({
                            inputRange: [0, 1],
                            outputRange: [2, 0.1],
                            extrapolate: 'clamp'
                          })
                        }],
                      opacity: this.fontOpacity[i]
                      }]
                    }
                  >
                    {el}
                  </Animated.Text>
                ))
              }
            </View>
          }
        >
          {
            this.splashImages.map((el, i) => (
              <Animated.Image
                source={{uri: el}}
                style={[
                  styles.image,
                  {
                    opacity: this.imageOpacity[i]
                  }
                ]}
              />
            ))
          }

        </MaskedViewIOS>
      </View>
    )
  }
}

