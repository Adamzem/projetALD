import React from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-web-swiper'

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Swiper>
          <View style={[styles.slideContainer]}>
            <ImageBackground
              source={require('../assets/candidat_1.jpg')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <View>
            <ImageBackground
              source={require('../assets/candidat_2.jpg')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <View>
            <ImageBackground
              source={require('../assets/candidat_3.jpg')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={[styles.buttonRegister]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Crée un compte</Text>
            </TouchableOpacity>
            <Text style={[styles.loginText]}>Ou</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    flex: 0,
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },
  buttonRegister: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ce2d4f',
    paddingBottom: '10%'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#3740FE',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
})
