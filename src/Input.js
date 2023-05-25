import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './features/TodoSlice';

const Input = () => {

    const [value, setValue] = useState('');
    const { todos } = useSelector((store) => store.todos);
    const [todoDesc, setTodoDesc] = useState('');
    const dispatch = useDispatch();

    const addNewTodo = async () => {
        const newTodo = { title: value, description: todoDesc, status: 'Active' };
        try {
            dispatch(addTodo(newTodo));
            setValue('');
            setTodoDesc('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <View>
                <TextInput style={styles.input} placeholder='Enter the task for The day!'
                    value={value}
                    onChangeText={setValue}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter todo description"
                    value={todoDesc}
                    onChangeText={text => setTodoDesc(text)}
                />
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={() => addNewTodo()}>
                <Ionicons name="add-sharp" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
export default Input;