import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import database from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      writer: '',
      heading: '',
      story: '',
    };

    var submitStory = async () => {
      db.collection('stories').add({
        writer: this.state.writer,
        heading: this.state.title,
        story: this.state.story,
      });
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'magenta'}
          centerComponent={{
            text: 'STORY HUB',
            style: { color: 'cyan', fontsize: 18 },
          }}
        />

        <View style={styles.view}>
          <TextInput
            onChangeText={(text) => this.state.writer(text)}
            style={styles.inputBox}
            placeholder="WRITER"
          />
        </View>

        <View style={styles.enter}>
          <TextInput
            onChangeText={(text) => this.state.heading(text)}
            style={styles.inputBox}
            placeholder="HEADING"
          />
        </View>

        <View style={styles.enter}>
          <TextInput
            onChangeText={(text) => this.state.story(text)}
            style={styles.writing}
            multiline={true}
            placeholder="BEGIN WRITING..."
          />
        </View>

        <View>
          <TouchableOpacity style={styles.submit} onPress={this.submitStory}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },

  view: {
    flexDirection: 'row',
    margin: 20,
  },

  enter: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 18,
  },

  writing: {
    width: 300,
    height: 500,
    borderWidth: 1,
    fontSize: 18,
  },

  submit: {
    backgroundColor: 'yellow',
    width: 100,
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
