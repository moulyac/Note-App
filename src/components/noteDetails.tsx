/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NoteDetails = ({route, navigation}: any) => {
  const title = route.params.noteTitle;

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        // style={styles.button}
        onPress={() => {
          navigation.navigate('addOrEditNote', {action: 'Edit', title});
        }}>
        <Text
        // style={styles.button_text}
        >
          Edit Note
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
  },
});
