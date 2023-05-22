import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

const Todo = ({ todo, onDelete, index }) => {
    return (
        <View style={styles.todoContainer}>
            <View style={styles.todoTextContainer}>
                <Text style={todo.status === 'Done' ? styles.doneTodo : styles.todoTitle}>{todo.title}</Text>
                <Text style={todo.status === 'Done' ? styles.doneTodo : styles.todoDesc}>{todo.description}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(index)}>
                <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
export default Todo