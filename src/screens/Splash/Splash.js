import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';

/* Logo */
import Logo from '../../images/Logo.png';

class LoadingScene extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };
  switchToAuth = () => {
    this.props.navigation.navigate('home')
  };
  componentDidMount() {
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });

      setTimeout(this.switchToAuth, 1500);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={Logo} style={{height: 100, width: 100}} />

          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#5257f2"
            />
          ) : null}
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logoText}>DETECT COVID-19 BY COUGH</Text>
        </Animated.View>
      </View>
    );
  }
}

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(179, 27, 26)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 25,
    marginTop: 29.1,
    fontWeight: '300',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
