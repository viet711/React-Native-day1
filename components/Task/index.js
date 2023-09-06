import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from "./style"

const Task = (props) => {
  const {number} = props;
  const numbertext = number < 10 ?`${number}` : number ;
  const itemBg = number % 2 === 0 ? styles.even : styles.old ;
 
  return (
    <TouchableOpacity 
      onPress={props.ondeleteTask}
    >
            <View style={styles.item}>
              <View style={[styles.square,itemBg]}>
                <Text style={styles.number}>{props.number}</Text>
              </View>
              <Text style={styles.content}>
                {props.title}
              </Text>
            </View>
          </TouchableOpacity>
  )
}

export default Task