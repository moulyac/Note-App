import {StyleSheet, Text, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import Input from './InputText/Input';
import Button from './Button/Button';
import * as yup from 'yup';
import Util from './util';

const NoteFrom = ({route, navigation}: any) => {
  const {action, title, data} = route.params;
  const {updateNote, notes} = Util();

  const noteSchema = yup.object({
    title: yup.string().required('Title is required.'),
    description: yup.string().notRequired(),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(noteSchema),
    defaultValues: {title: title, description: data.description},
  });

  const onSubmit = (fieldData: any) => {
    console.log(fieldData, 'submit', data.id, notes);
    updateNote(fieldData, data.id, notes);
    navigation.navigate('noteDetails', {
      noteTitle: title,
      data: data,
    });
  };

  return (
    <View>
      <Text style={styles.title}>{action} Note</Text>
      <Input
        control={control}
        placeholder={'Enter Title here'}
        fieldData={{
          key: 'title',
          label: 'Title',
          required: true,
          RequiredMessage: 'Title is required.',
        }}
      />
      <Text style={styles.errorMessage}>
        {/* @ts-ignore */}
        {errors.title && errors.title?.message}
      </Text>
      <Input
        control={control}
        placeholder={'Enter description here'}
        style={styles.textArea}
        fieldData={{
          key: 'description',
          label: 'Description',
          required: true,
          RequiredMessage: 'Description is required.',
        }}
        multiline={true}
      />
      <Button
        buttonText="Submit"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
        buttonTextStyle={styles.buttonText}
      />
    </View>
  );
};

export default NoteFrom;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 20,
  },
  textArea: {
    height: 200,
  },
  button: {
    margin: 15,
    backgroundColor: '#800050',
    padding: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  errorMessage: {
    marginLeft: 20,
    color: 'red',
  },
});
