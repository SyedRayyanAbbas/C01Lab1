import 'react-native-get-random-values';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({initialValues}) => {
    const [tasks, setTasks] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newToDo = {id: uuidv4(), title: newTitle};
        setTasks(prevTasks => {
            return [...prevTasks, newToDo]
        });
    }

    const removeToDo = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.id !== id);
        });
    }

    const styles = StyleSheet.create({
        todoListContainer: {
          margin: 10,
        },
        todoItem: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginVertical: 5,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
        },
    });

    return (
        <View style={styles.todoListContainer}>
            {tasks.map((task) => (
                <View key={task.id} style={styles.todoItem}>
                    <Text>{task.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(task.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    )
}
ToDoList.defaultProps = {initialValues:[]};

export default ToDoList; 