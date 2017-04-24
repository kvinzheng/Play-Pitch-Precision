import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

const Home = () => {
  const { headerTextStyle, headerBackgroundStyle } = styles;

  return (
    <View style={headerBackgroundStyle} >

      <Text style={headerTextStyle}>INTERVALICITY </Text>
    </View>
  );
};

const styles = {
  headerTextStyle: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerBackgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Home;
