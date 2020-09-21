import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import firebase from '../Firebase/Fire'
import { LinearGradient } from 'expo-linear-gradient';


export default class Signup extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    header: null
  }
  constructor () {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, props) => {
    const state = this.state
    state[props] = val
    this.setState(state)
  }

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Entre les détails pour la création!')
    } else {
      this.setState({
        isLoading: true
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          res.user.updateProfile({
            displayName: this.state.displayName
          })
          Alert.alert('Compte crée avec succès!')
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: ''
          })
          this.props.navigation.navigate('AboutAgent')
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
        <View>
        <LinearGradient
          // Background Linear Gradient
          colors={['#ce2d4f', '#3740FE']}
          style={{
            position: 'absolute',
            left: -50,
            right: -50,
            top: -205,
            bottom:50,
            height: 820,
          }}
        />
          <Text style={styles.loginTextAgent}>Agents</Text>
        </View>

        <TextInput
          style={styles.inputStyle}
          placeholder='Nom / Prénom'placeholderTextColor="white" 
          value={this.state.displayName}
          onChangeText={val => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Email' placeholderTextColor="white" 
          value={this.state.email}
          onChangeText={val => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Mot de passe' placeholderTextColor="white" 
          value={this.state.password}
          onChangeText={val => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity
            onPress={() => this.registerUser()}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Inscription</Text>
          </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('connexion')}
        >
          Deja enregistré? cliquez ici pour vous connecter
        </Text>
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
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
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
    backgroundColor: '#fff'
  },
  signupTextCont: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingBottom: 60,
    flexDirection: 'row'
  },
  loginTextAgent: {
    color: 'white',
    marginBottom: 100,
    textAlign: 'center',
    fontSize:40
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#ce2d4f',
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
  }
})
