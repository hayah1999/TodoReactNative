import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // marginTop: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
    },
    inputContainer: {
        padding: 10,
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: 50,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        height: 50,
    },
    submitBtn: {
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        height: 70,
        marginLeft: 10,
        borderRadius: 10,
    },
    dividerLine: {
        height: 1,
        width: "90%",
        backgroundColor: "#aeaeae",
        marginVertical: 15,
    },
    filterButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        alignSelf: 'center',
    },
    todoTextContainer: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    todoDesc: {
        fontSize: 16,
        marginTop: 5,
    },
    doneTodo: {
        textDecorationLine: 'line-through',
        color: '#ccc',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});