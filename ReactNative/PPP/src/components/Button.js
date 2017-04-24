import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressCallback, children, loginStyle }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPressCallback}
      style={buttonStyle}
    >
      <Text style={loginStyle || textStyle}>
        {children}
      </Text>

    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fffafa',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#00ff7f',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00ff7f',
    marginLeft: 5,
    marginRight: 5
  }
};


export default Button;
