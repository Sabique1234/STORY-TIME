import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReadStoryScreen extends Component {

  render() {

    return (

      <View style={styles.container}>
      <Text style={styles.heading}> Read Story </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "/",
    },

  heading:{ 
    alignSelf: "center", 
    fontWeight: "bold" 
    },
    
});
