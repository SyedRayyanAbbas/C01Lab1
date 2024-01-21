import { useState } from "react"
import { Button, TextInput, View, StyleSheet} from "react-native";

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        const title = task.trim();
        if (title === "") {
            return;
        }
        onAddTask(title);
        setTask("");
    }
    
    return (
        <View style={styles.addTodoForm}>
            <TextInput style={styles.input} onChangeText={(e) => setTask(e)} value={task}/>
            <Button title="Add ToDo" onPress={() => handleAddTask()} />
        </View>
    )
} 

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

AddTask.defaultProps = {onAddTask: () => {}};
export default AddTask;
