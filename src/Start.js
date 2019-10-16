import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './assets/styles';
export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.containerFluid}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Touch Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
  onPress = () => {
    this.props.navigation.navigate('Home');
  };
}
