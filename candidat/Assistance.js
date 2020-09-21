import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Nom Prénom'
          autoCapitalize='none'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Mail'
          autoCapitalize='none'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Objet'
          autoCapitalize='none'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Objet', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Message'
          secureTextEntry={false}
          autoCapitalize='none'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Message', val)}
        />

        <Button title='Envoyé' onPress={this.signUp} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
