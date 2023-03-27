/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/components/home';
import {COLORS} from './src/util/colorThem/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteDetails from './src/components/noteDetails';
import NoteFrom from './src/components/NoteForm';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <NavigationContainer>
        <Stack.Navigator>
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
  );
};

export default App;
