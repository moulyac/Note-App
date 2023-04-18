/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../util/colorThem/colors';
import Util from './util';

const Home = ({navigation}: any) => {
  const {textInput, addNote, setTextInput, notes} = Util();

  const Item = ({title, data}: any) => {
    return (
      <View style={styles.item}>
        <Button
          title={title}
          onPress={() =>
            navigation.navigate('noteDetails', {
              noteTitle: title,
              data: data,
            })
          }
        />
      </View>
    );
  };

  const renderItem = ({item}: any) => <Item title={item.title} data={item} />;

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={{fontSize: 32, fontWeight: 'bold', color: '#841584'}}>
          Notes App
        </Text>
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={index => index.id}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={textInput}
            placeholder="Enter Note"
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          disabled={textInput.length === 0}
          onPress={addNote}>
          <Text style={styles.button_text}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    height: 50,
    marginBottom: 11,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginRight: 20,
    borderRadius: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 29,
    backgroundColor: '#800050',
    padding: 8,
    borderRadius: 5,
  },
  button_text: {
    color: 'white',
    fontSize: 15,
  },
  item: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 10,
  },
  list: {
    fontSize: 18,
    color: '#800050',
  },
});
