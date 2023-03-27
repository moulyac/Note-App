import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, TextInput} from 'react-native';

interface IInput {
  control: any;
  placeholder: string;
  fieldData: {
    key: string;
    label: string;
    required: boolean;
    RequiredMessage: string;
  };
  multiline?: boolean;
  style?: any;
}

const Input = (props: IInput) => {
  const {control, placeholder, fieldData, multiline = false, style} = props;

  return (
    <Controller
      control={control}
      name={fieldData.key}
      render={({field: {onChange, value, onBlur}}) => (
        <TextInput
          style={[styles.input, style]}
          multiline={multiline}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChangeText={valueTyped => onChange(valueTyped)}
        />
      )}
      rules={{
        required: {
          value: fieldData.required,
          message: fieldData.RequiredMessage,
        },
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    margin: 15,
  },
});
