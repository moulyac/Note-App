/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Util from '../Pages/util';

const NoteDetails = ({route, navigation}: any) => {
  const title = route.params.noteTitle;
  const data = route.params.data;
  const {notes} = Util();
  const getDescription = () => {
    const description = notes.filter(item => {
      return item.title === title;
    });
    return description ? description : '';
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('addOrEditNote', {
              action: 'Edit',
              title,
              data,
            });
          }}>
          <Text style={{color: 'white'}}>Edit Note</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* @ts-ignore */}
        <Text>{getDescription()}</Text>
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 29,
    backgroundColor: '#800050',
    padding: 8,
    borderRadius: 5,
  },
});
