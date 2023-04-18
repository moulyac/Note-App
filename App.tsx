/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import Home from './src/Pages/Home';
import {COLORS} from './src/util/colorThem/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteDetails from './src/Pages/NoteDetails';
import NoteFrom from './src/Pages/NoteForm';
import {AuthContext} from './src/util/context';
import SignIn from './src/Pages/SignIn';
import SignUp from './src/Pages/SignUp';

const App = () => {
  const Stack = createNativeStackNavigator();
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (
    prevState: any,
    action: {type: any; token: any; id: any},
  ) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        dispatch({type: 'LOGIN', id: '', token: ''});
      },
      signOut: () => {
        dispatch({
          type: 'LOGOUT',
          token: undefined,
          id: undefined,
        });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      let userToken;
      userToken = null;
      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: userToken,
        id: undefined,
      });
    }, 3000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUpScreen" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="home" component={Home} options={{title: ' '}} />
            <Stack.Screen
              name="noteDetails"
              component={NoteDetails}
              options={{title: ' '}}
            />
            <Stack.Screen
              name="addOrEditNote"
              component={NoteFrom}
              options={{title: ' '}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

export default App;
