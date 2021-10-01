import {observer} from 'mobx-react';
import React, {FC, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {heartIcon, manIcon} from '../assets';
import {EventIcon} from '../components';

const {width, height} = Dimensions.get('screen');

const Main: FC = observer(() => {
  const animatedState = useRef(new Animated.Value(0)).current;
  const animatedPressState = useRef(new Animated.Value(0)).current;

  // const animatedState = useRef(new Animated.ValueXY()).current;

  const panResponde = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      Animated.timing(animatedPressState, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    },
    onPanResponderMove: Animated.event([
      null,
      {
        dx: animatedState, // x,y are Animated.Value
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(animatedState, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(animatedPressState, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const imageRotate = animatedState.interpolate({
    inputRange: [0, 300],
    outputRange: ['0deg', '5deg'],
  });
  const imageOpacity = animatedState.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [0.5, 1, 0.5],
  });

  const imageScale = animatedPressState.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const imgStyle = {
    opacity: imageOpacity,
    transform: [
      {translateX: animatedState},
      {rotate: imageRotate},
      {scale: imageScale},
    ],
  };

  return (
    <Animated.View style={[styles.wrapper]}>
      <Animated.Image
        style={[styles.image, imgStyle]}
        resizeMode={'cover'}
        blurRadius={0}
        {...panResponde.panHandlers}
        source={{
          uri: 'https://downloader.disk.yandex.ru/preview/947e03d8aa8b9e58eb0456d1bd04208e061e3d8343228eb1ad103d65bf334f39/61557d99/6gFEX2MDsAxrPx3WDbNd4fnhqluecMxvsRZ4_qlzYZpokC8cJbg_9k6yJA0AjfyNqfcnPSYjTYhca_jEUk-a_A%3D%3D?uid=0&filename=IMG_2108.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        }}
      />
      <View style={styles.statisticWrapper}>
        <Text style={styles.statisticText}>5</Text>
        <Image style={styles.statisticImage} source={heartIcon} />
      </View>
      <View style={styles.toolbar}>
        <Text style={styles.petName}>Элвис</Text>
        <Text style={styles.name}>Илья Алпатов</Text>
        <View style={styles.events}>
          <EventIcon wrapperStyle={styles.event} icon={heartIcon} />
          <EventIcon icon={manIcon} />
        </View>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height,
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,

    backgroundColor: '#fff',
  },
  petName: {
    fontWeight: '600',
    letterSpacing: 0.7,
    fontSize: 24,
  },
  name: {
    fontSize: 17,
    color: 'gray',
  },
  events: {
    marginTop: 20,
    flexDirection: 'row',
  },
  event: {
    marginRight: 10,
  },
  statisticWrapper: {
    position: 'absolute',
    top: 0,
    marginTop: 50,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statisticText: {
    color: '#fff',
    fontSize: 21,
    marginRight: 10,
  },
  statisticImage: {
    width: 30,
    height: 30,
  },
});

export default Main;
