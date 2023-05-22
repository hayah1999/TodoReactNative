import { useState } from "react";
import { FlatList, SafeAreaView, TextInput, TouchableOpacity, View, Text, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import Todo from "./Todo";

const Todos = () => {
    const [value, setValue] = useState('');
    const [todoDesc, setTodoDesc] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTodo = () => {

        if (!value.trim() || !todoDesc.trim()) {
            alert('Please enter a valid task and description.');
            return;
          }
        setTodos([...todos, { title: value, description: todoDesc, status: 'Active' }]);
        setValue('');
        setTodoDesc('');
    }
    const markTodoAsDone = (index) => {
        const newTodos = [...todos];
        if(newTodos[index].status === 'Done'){
            newTodos[index].status = 'Active';
        }else{
            newTodos[index].status = 'Done';
        }
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const filterTodos = (status) => {
        if (status === 'All') {
            return todos;
        } else {
            return todos.filter(todo => todo.status === status);
        }
    };

    return (
        <>
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
                <TouchableOpacity style={styles.submitBtn} onPress={() => addTodo()}>
                    <Ionicons name="add-sharp" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.dividerLine} />
            <View style={styles.filterButtonsContainer}>
                <Button
                    title="All"
                    onPress={() => setFilter('All')}
                    color={filter === 'All' ? '#007AFF' : '#333'}
                />
                <Button
                    title="Active"
                    onPress={() => setFilter('Active')}
                    color={filter === 'Active' ? '#007AFF' : '#333'}
                />
                <Button
                    title="Done"
                    onPress={() => setFilter('Done')}
                    color={filter === 'Done' ? '#007AFF' : '#333'}
                />
            </View>
            <FlatList style={{width: '60%'}}
                data={filterTodos(filter)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => markTodoAsDone(index)}>
                        <Todo todo={item} onDelete={deleteTodo} index={index}/>
                    </TouchableOpacity>
                )}
            />
        </>
    )
}
export default Todos