import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from "./components/Task";
import styles from './App.components.style';
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]); // Fixed the typo in setTaskList

  const handleAddTask = (Task) => { // Renamed the parameter to avoid conflict
    setTaskList([...taskList, Task]);
  };

  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo', 'Có Muốn Xóa không', [
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
        style: 'cancel',
      },
      { text: 'cancel', onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo list</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => (
            <Task key={index} title={item} number={index + 1} ondeleteTask={() => handleDeleteTask(index)} />
          ))}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
