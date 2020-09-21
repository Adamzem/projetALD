import * as React from 'react'
import { Button, Image, View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

export default class ImagePickerExample extends React.Component {
  state = {
    LocalImage: [],
    multipleUrl: []
  }

  componentDidMount () {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    }
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3]
    })
    let imageUri = pickerResult
      ? `data:image/jpg;base64,${pickerResult.base64}`
      : null
    imageUri && { uri: imageUri }
    this.state.multipleUrl.push(imageUri)
    this.setState({
      LocalImage: this.state.LocalImage.concat([pickerResult.uri])
    })
  }

  _takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    )
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )
    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: true,
        aspect: [4, 3]
      })
      if (!pickerResult.cancelled) {
        let imageUri = pickerResult
          ? `data:image/jpg;base64,${pickerResult.base64}`
          : null
        this.state.multipleUrl.push(imageUri)
        this.setState({
          LocalImage: this.state.LocalImage.concat([pickerResult.uri])
        })
      }
    }
  }
  _renderImages () {
    let images = []
    this.state.LocalImage.map((item, index) => {
      images.push(
        <Image
          key={index}
          source={{ uri: item }}
          style={{ width: 100, height: 100 }}
        />
      )
    })
    return images
  }
  render () {
    return (
      <View>
        <View style={style.buttons}>
          <Button
            title='Pick an image from camera roll'
            onPress={this._pickImage}
          />
        </View>
        <View style={style.buttons}>
          <Button onPress={this._takePhoto} title='Take a photo' />
        </View>

        <View>{this._renderImages()}</View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce2d4f'
  },
  buttons: {}
})
