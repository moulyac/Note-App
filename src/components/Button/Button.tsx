import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface IButton {
  buttonText: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  buttonTextStyle?: any;
}

const Button = (props: IButton) => {
  const {buttonText, onPress, style, disabled = false, buttonTextStyle} = props;

  return (
    <TouchableOpacity style={[style]} disabled={disabled} onPress={onPress}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

// const styles = StyleSheet.create({
//   button: {},
// });
