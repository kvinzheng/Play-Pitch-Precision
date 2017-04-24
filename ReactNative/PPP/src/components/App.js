import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from './header';
import Home from './home';
import Button from './Button';
import HomeBottom from './HomeBottom';
// import MMusic.jpg from '../assets'
const App = () => {
  const { containerStyle, loginStyle } = styles;
  return (
    <Image
      style={styles.backgroundImage} source={{
      uri: 'https://s-media-cache-ak0.pinimg.com/originals/e2/aa/ce/e2aacec2cab890887b1f4dba3df15d6e.jpg' }}
    >
    <View style={{ flex: 1 }}>
      <Header headerText={'´*•.¸(*•.¸♥¸.•*´)¸.•*´'}>
        {/* <CommunityList /> */}
      </Header>
      <Home />
      <HomeBottom customStyle={containerStyle}>
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
          }}
        >
          <Text
            style={{
            fontFamily: 'Cochin',
            fontSize: 20,
            fontWeight: 'bold' }}
          > Singing
          </Text>

          <Text
            style={{
            fontFamily: 'Cochin',
            fontSize: 16,
            fontWeight: 'bold' }}
          >Music that perfectly matches your tempo
          </Text>

        </View>
      </HomeBottom>
      <HomeBottom >
        <Button >CREATE ACCOUNT</Button>
      </HomeBottom>
      <HomeBottom>
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center' }}
        >
          <Text
            style={{
            color: '#000000',
            fontSize: 12 }}
          >Already a user?
          </Text>
        </View>
      </HomeBottom>
      <HomeBottom>
        <Button loginStyle={loginStyle}>Log In</Button>
      </HomeBottom>
    </View>
  </Image>
  );
};

const styles = {
  loginStyle: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  containerStyle: {
    height: 300
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  }
};

export default App;
