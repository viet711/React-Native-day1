import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

const form = (props) => {

  const [Task, setSTask] = useState("");
  const handleAddTask = () => {
    if (Task.length === 0){
        alert ("còn trống ")
        return false;
    }
    props.onAddTask(Task);
    setSTask ('');
    Keyboard.dismiss();
    
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTaks}
    >
      <TextInput
        value= {Task}

        onChangeText={(text) => setSTask(text)}
        placeholder="Your Task"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconwapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default form;
