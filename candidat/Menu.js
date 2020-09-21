import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SafeAreaView from 'react-native-safe-area-view'
import {
  StreamApp,
  FlatFeed,
  Activity,
  LikeButton,
  StatusUpdateForm
} from 'expo-activity-feed'

export default class Menu extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    const CustomActivity = props => {
      return <Activity {...props} Footer={<LikeButton {...props} />} />
    }
    return (
      <SafeAreaProvider style={style.main_container}>
        <View>
          <SafeAreaView style={style.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
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
          {/* <StreamApp
            apiKey="rpphrzvhp8as"
            appId="87228"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.sp4DpwIlc5TQsTVeQUNnGTlr49tJcuB0Uvo2dGt9joM"
          >
            <FlatFeed Activity={CustomActivity} />
            <StatusUpdateForm feedGroup='timeline' />
          </StreamApp> */}
        </View>
      </SafeAreaProvider>
    )
  }
}

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 20

  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 33,
    marginBottom:20,
    marginTop:5
  },
  container: {
    flex: 0,
    flexDirection: 'row'
  }
})
