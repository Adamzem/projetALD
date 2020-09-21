import React, { Component } from 'react'
import {
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar,
  FlatList,
  View
} from 'react-native'
import firebaseApp from '../Firebase/Fire'
import styles from '../styles'

class Rooms extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ce2d4f'
    },
    headerTintColor: 'white',
    headerBackTitle: null,
  }
  constructor (props) {
    super(props)
    var firebaseDB = firebaseApp.database()
    this.roomsRef = firebaseDB.ref('rooms')
    this.state = {
      rooms: [],
      newRoom: ''
    }
  }

  componentDidMount () {
    this.listenForRooms(this.roomsRef)
  }

  listenForRooms (roomsRef) {
    roomsRef.on('value', dataSnapshot => {
      var roomsFB = []
      dataSnapshot.forEach(child => {
        roomsFB.push({
          name: child.val().name,
          key: child.key
        })
      })
      this.setState({ rooms: roomsFB })
    })
  }

  addRoom () {
    if (this.state.newRoom === '') {
      return
    }
    this.roomsRef.push({ name: this.state.newRoom })
    this.setState({ newRoom: '' })
  }

  openMessages (room) {
    this.props.navigation.navigate('Messages', {
      roomKey: room.key,
      roomName: room.name
    })
  }

  renderRow (item) {
    return (
      <TouchableHighlight
        style={styles.roomLi}
        underlayColor='#fff'
        onPress={() => this.openMessages(item)}
      >
        <Text style={styles.roomLiText}>{item.name}</Text>
      </TouchableHighlight>
    )
  }

  render () {
    return (
      <View style={styles.roomsContainer}>
        <StatusBar barStyle='light-content' />
        {/* <Text style={styles.roomsHeader}>Chat</Text> */}
        <View style={styles.roomsInputContainer}>
          <TextInput
            style={styles.roomsInput}
            placeholder={'Channel de discussion'}
            onChangeText={text => this.setState({ newRoom: text })}
            value={this.state.newRoom}
          />
          <TouchableHighlight
            style={styles.roomsNewButton}
            underlayColor='#fff'
            onPress={() => this.addRoom()}
          >
            <Text style={styles.roomsNewButtonText}>Crée</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.roomsListContainer}>
          <FlatList
            data={this.state.rooms}
            renderItem={({ item }) => this.renderRow(item)}
          />
        </View>
      </View>
    )
  }
}

export default Rooms
