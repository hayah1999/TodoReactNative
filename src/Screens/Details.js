import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Details = ({ route, navigation }) => {
    const { id } = route.params;
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const storedTodos = await AsyncStorage.getItem('todos');
                if (storedTodos) {
                    const todos = JSON.parse(storedTodos);
                    const todo = todos.find(t => t.id === id);
                    setTodo(todo);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchTodo();
    }, [id]);

    return (
        <SafeAreaView>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Home')}
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5
                }}
            >
                <Text>Home Page</Text>
            </TouchableOpacity>
            {todo && (
                <View style={styles.container}>
                    <Text style={styles.title}>{todo.title}</Text>
                    <Text style={styles.description}>{todo.description}</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#777',
    },
});
export default Details