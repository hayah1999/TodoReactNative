import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomModal from '../components/CustomModal';
import { useState } from 'react';
import Todos from '../Todos';
import { styles } from '../styles';
// import { Platform } from 'react-native';

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Todos  nav={navigation}/>
        </SafeAreaView>
        // <SafeAreaView>
        //     <Text >{Platform.OS === 'android' ? 'is android' : 'is not'}</Text>
        //     <TouchableOpacity
        //         activeOpacity={0.8}
        //         onPress={() => {
        //             navigation.navigate('Details', {
        //                 id: 86,
        //             });
        //             setShowModal(true);
        //         }}
        //         style={{ backgroundColor: 'red', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}
        //     >
        //         <Text>Details Page</Text>
        //         <Text>Open Modal</Text>
        //         </TouchableOpacity>

        // </SafeAreaView>
    )
}
export default Home