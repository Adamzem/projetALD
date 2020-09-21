import React from 'react'
import { StyleSheet } from 'react-native'
// var Dimensions = require('Dimensions')
// var deviceWidth = Dimensions.get('window').width
// var deviceHeight = Dimensions.get('window').height

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  color: {
    color: '#df4723'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 10,
    backgroundColor: '#fff'
  },
  imgRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15
  },
  textInput: {
    padding: 15,
    backgroundColor: '#fff',
    height: 100
  },
  bold: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#df4723',
    textAlign: 'center',
    color: '#df4723',
    padding: 15,
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  authContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60
  },
  appTitle: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '200',
    marginBottom: 30
  },
  authInputLabel: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 50
  },
  authTextInput: {
    height: 52,
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    backgroundColor: '#1E90FF',
    borderBottomWidth: 2,
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 50,
    borderBottomColor: '#fff'
  },
  authButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 4,
    padding: 16,
    marginTop: 20
  },
  authButtonText: {
    color: 'black',
    fontSize: 20
  },
  authLowerText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 10
  },
  roomsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  roomsInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    top: 30
  },
  roomsInput: {
    flex: 1,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    color: 'brown',
    borderColor: '#4056f4',
    borderWidth: 2,
    borderRadius: 4,
    margin: 10
  },
  roomsNewButton: {
    alignItems: 'center',
    marginRight: 20
  },
  roomsNewButtonText: {
    color: '#ce2d4f',
    fontSize: 18
  },
  roomsListContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#fff'
  },
  roomLi: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#4404fc',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  roomLiText: {
    color: 'black',
    fontSize: 22
  },
  messagesHeader: {
    backgroundColor: '#ce2d4f'
  },
  messagesTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400'
  },
  messagesBackTitle: {
    color: '#fff'
  }
})

module.exports = styles
