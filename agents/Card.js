import React from 'react'
import {
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
  { id: '1', uri: require('../assets/profil-candidat-1.jpg') },
  { id: '2', uri: require('../assets/profil-candidat-2.jpg') },
  { id: '3', uri: require('../assets/profil-candidat-3.jpg') }
  // { id: '4', uri: require('./assets/4.jpg') },
  // { id: '5', uri: require('./assets/5.jpg') }
]

export default class Card extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor () {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
  }
  UNSAFE_componentWillMount () {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: '-30deg' }],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{ rotate: '30deg' }],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: '-30deg' }],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: '30deg' }],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        )
      }
    }).reverse()
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaProvider style={style.main_container}>
          <View>
            <SafeAreaView style={style.container}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgotPass')}
              >
                <Image
                  style={style.image}
                  source={require('../assets/mon-profil.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('HomeChat')}
              >
                <Image
                  style={style.image}
                  source={require('../assets/messages.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FilePicker')}
              >
                <Image
                  style={style.image}
                  source={require('../assets/media.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Assistance')}
              >
                <Image
                  style={style.image}
                  source={require('../assets/assistance.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Image
                  style={style.image}
                  source={require('../assets/deconexion.png')}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </SafeAreaProvider>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 550 }}></View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop:50,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 33,
    marginBottom: 20,
    marginTop: 5
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})
