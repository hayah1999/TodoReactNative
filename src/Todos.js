import { useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Button } from "react-native";
import { styles } from "./styles";
import Todo from "./Todo";
import CustomModal from "./components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { markTodoAsDone, removeTodo } from "./features/TodoSlice";
import Input from "./Input";

const Todos = ({ nav }) => {
    const [filter, setFilter] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const { todos } = useSelector((store) => store.todos);
    const [selectedTodoId, setSelectedTodoId] = useState(null);
    const dispatch = useDispatch();

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = (id) => {
        setSelectedTodoId(id);
        setShowModal(true);
    }

    const markATodoAsDone = async (id) => {
        dispatch(markTodoAsDone(id));
    };

    const deleteTodo = async () => {
        if (selectedTodoId) {
            dispatch(removeTodo(selectedTodoId));
            closeModal();
        }
    };

    const filterTodos = (status) => {
        if (status === 'All') {
            return todos;
        } else {
            return todos.filter(todo => todo.status === status);
        }
    };

    const routingToDetails = (id) => {
        nav.navigate('Details', { id: id })
    }

    return (
        <>
            <Input />
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
            <FlatList style={{ width: '60%' }}
                data={filterTodos(filter)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => markATodoAsDone(item.id)}>
                        <Todo todo={item} onDelete={() => openModal(item.id)} index={index} routing={routingToDetails} />
                    </TouchableOpacity>
                )}
            />
            <CustomModal
                msg={'Are you sure you want to delete this todo?'}
                visible={showModal}
                overlay={true}
                closeModal={closeModal}
                action={deleteTodo}
                animation='slide' />
        </>
    )
}
export default Todos;