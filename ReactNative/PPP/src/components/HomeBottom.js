import React from 'react';
import { View } from 'react-native';

const HomeBottom = (props) => {
  const { children, customStyle } = props;
  // const viewStyle = !customStyle ?  defaultStyle.containerStyle : customStyle;

  return (
    // <View style={viewStyle} >
    <View style={{ ...defaultStyle.containerStyle, ...customStyle }} >
      {children}
    </View>
  );
};

const defaultStyle = {
  containerStyle: {
    padding: 5,
    // backgroundColor: '#fff8dc',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default HomeBottom;
