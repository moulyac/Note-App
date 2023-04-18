import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/InputText/Input';

const SignUp = ({navigation}: any) => {
  const signInSchema = yup.object({
    email: yup.string().required('Email is required.'),
    name: yup.string().required('Name is required.'),
    password: yup.string().required('Password is required.'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('home');
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Email</Text>
        <Input
          control={control}
          placeholder={'Enter Email here'}
          fieldData={{
            key: 'email',
            label: 'Email',
            required: true,
            RequiredMessage: 'Email is required.',
          }}
        />
        {errors.email && (
          //@ts-ignore
          <Text style={styles.errorMessage}>{errors.email?.message} </Text>
        )}
        <Text style={styles.title}>User Name</Text>
        <Input
          control={control}
          placeholder={'Enter Name here'}
          fieldData={{
            key: 'name',
            label: 'Name',
            required: true,
            RequiredMessage: 'Name is required.',
          }}
        />
        {errors.name && (
          //@ts-ignore
          <Text style={styles.errorMessage}>{errors.name?.message} </Text>
        )}
        <Text style={styles.title}>Password</Text>
        <Input
          control={control}
          placeholder={'Enter Password here'}
          fieldData={{
            key: 'password',
            label: 'Password',
            required: true,
            RequiredMessage: 'Password is required.',
          }}
        />

        {errors.password && (
          //@ts-ignore
          <Text style={styles.errorMessage}>{errors.password?.message}</Text>
        )}
        <Button
          buttonText="Submit"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          buttonTextStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#800050',
    marginHorizontal: 25,
    marginVertical: 100,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 30,
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
    marginTop: -10,
    marginLeft: 20,
    color: 'red',
    marginBottom: 15,
  },
});
