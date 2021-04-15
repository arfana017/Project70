import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            titleText: '',
            authorText: '',
            storyText: ''
        }
    }
  render() {
    return(
      <View style = {styles.container}>
          <Header>
              backgroundColor = {'lightpink'}
              centerComponent = {{text: 'Story Hub', style: {color: 'white', fontSize: 20}}}
          </Header>

          <TextInput style = {styles.inputBox}>
              onChangeText = {(titleText)=>{
                  this.setState({titleText: titleText})
              }}
              value = {this.state.titleText}
              placeholder = {'Story Title'}
          </TextInput>

          <TextInput style = {styles.inputBox}>
              onChangeText = {(authorText)=>{
                  this.setState({authorText: authorText})
              }}
              value = {this.state.authorText}
              placeholder = {'Author'}
          </TextInput>

          <TextInput style = {styles.storyBox, {multiline: true}}>
              onChangeText = {(storyText)=>{
                  this.setState({storyText: storyText})
              }}
              value = {this.state.storyText}
              placeholder = {'Write your story'}
          </TextInput>

          <TouchableOpacity style = {styles.submitButton}>
              <Text>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
      storyBox:{
        width: 200,
        height: 150,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
      submitButton:{
        backgroundColor: '#FBC02D',
        width: 100,
        height:50
      },
  });
  
