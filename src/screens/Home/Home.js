import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {RNVoiceRecorder} from 'react-native-voice-recorder';
import Foundation from 'react-native-vector-icons/Foundation';
export default class Home extends React.Component {
  check = () => {
    RNVoiceRecorder.Record({
      onDone: (path) => {
        console.log('==========>', path);
      },
      onCancel: () => {},
    });
  };

  render() {
    return (
      <View style={styles._container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles._bodySction}></View>
        <Image source={require('./../../images/cough.png')} style={styles.coughIcon} />

        <View style={styles._footer}>
          <TouchableOpacity
            style={styles._micBtn}
            onPress={() => this.check()}
            activeOpacity={0.1}>
            <Foundation name="microphone" style={styles._mic} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(179, 27, 26)',
  },
  _button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  _btn_text: {
    color: 'white',
  },
  _mic: {
    color: 'blue',
    fontSize: 50,
  },
  _bodySction: {
    flex: 1,
  },
  _footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  _micBtn: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgb(241, 248, 255)',
    borderWidth:6,
    borderColor:"rgb(241, 248, 255)"
  },
  coughIcon:{
    height:330,
    width:"80%"
  }
});
