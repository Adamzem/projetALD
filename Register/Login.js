import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Text
} from 'react-native'
import firebase from '../Firebase/Fire'

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ce2d4f'
    },
    headerTintColor: 'white'
  }
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state
    state[prop] = val
    this.setState(state)
  }

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Entrez les informations nécessaire!')
    } else {
      this.setState({
        isLoading: true
      })
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          console.log(res)
          this.setState({
            isLoading: false,
            email: '',
            password: ''
          })
          this.props.navigation.navigate('Menu')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size='large' color='#9E9E9E' />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder='Email'
          placeholderTextColor='white'
          value={this.state.email}
          onChangeText={val => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Mot de passe'
          placeholderTextColor='white'
          value={this.state.password}
          onChangeText={val => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <View>
          <TouchableOpacity
            onPress={() => this.userLogin()}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text>Si vous êtes un manager / </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('connexion')}
          >
            <Text style={{ color: 'white' }}>Cliquez ici</Text>
          </TouchableOpacity>

          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#ce2d4f'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1
  },
  loginText: {
    color: 'white',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#3740FE',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  signupTextCont: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingBottom: 60,
    flexDirection: 'row'
  },
})
