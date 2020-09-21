import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  Picker,
  BorderlessButton
} from 'react-native'
// import firebase from '../Firebase/Fire';

export default class AboutCandidat extends React.Component {
  constructor () {
    super()
    this.state = {
      PickerValue: '',
      titleText: 'VOTRE TALENT : '
    }
  }

  static navigationOptions = {
    header: null
  }

  clickme = () => {
    var data = this.state.PickerValue
    if (data == '') {
      alert('Séléctionne ton activité')
    } else if (data == 'chanteur') {
      this.props.navigation.navigate('SurveyScreen')
    } else if (data == 'humoriste') {
      this.props.navigation.navigate('Humoriste')
    } else if (data == 'comédien') {
      this.props.navigation.navigate('Comédien')
    } else if (data == 'mannequin') {
      this.props.navigation.navigate('Mannequin')
    } else if (data == 'télé-réalité') {
      this.props.navigation.navigate('Télé')
    } else if (data == 'foot') {
      this.props.navigation.navigate('Football')
    } else if (data == 'basket') {
      this.props.navigation.navigate('Basket')
    }
  }

  render () {
    // this.state = {
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid
    // }
    return (
      <View style={styles.main_container}>
        <Text style={styles.titleText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
            {'\n'}
            {'\n'}
          </Text>
        </Text>
        <Picker
          style={{ width: '80%' }}
          selectedValue={this.state.PickerValue}
          onValueChange={itemValue => this.setState({ PickerValue: itemValue })}
        >
          <Picker.Item label='Sportif' value='' />
          <Picker.Item label='Footballeur' value='foot' />
          <Picker.Item label='Basketteur' value='basket' />
        </Picker>
        <Picker
          style={{ width: '80%' }}
          selectedValue={this.state.PickerValue}
          onValueChange={itemValue => this.setState({ PickerValue: itemValue })}
        >
          <Picker.Item label='Artistes' value='' />
          <Picker.Item label='Chanteur' value='chanteur' />
          <Picker.Item label='Humoriste' value='humoriste' />
          <Picker.Item label='Comédien' value='comédien' />
          <Picker.Item label='Mannequin' value='mannequin' />
          <Picker.Item label='Télé-réalité' value='télé-réalité' />
        </Picker>
        <Button
          style={BorderlessButton}
          title='Continuer'
          color='#4056f4'
          onPress={this.clickme}
        ></Button>
        {/* <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#ce2d4f',
    marginTop:80
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 60,
    textAlign: 'center',
    color: 'white'
    // backgroundColor: 'grey'
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingBottom: 50,
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
})
