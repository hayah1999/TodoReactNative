import { View, Text, Modal, SafeAreaView, TouchableOpacity } from 'react-native';

const CustomModal = ({ msg, closeModal, visible, overlay, animation, action }) => {
    return (
        <Modal
            visible={visible}
            transparent={overlay}
            animationType={animation}
        >
            <View style={{
                flex: 1,
                backgroundColor: 'black',
                opacity: 0.9,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 300,
                    opacity: 1
                }}>
                    <View style={{ padding: 10, alignItems: 'flex-end' }}>
                        <Text onPress={closeModal} style={{ fontWeight: 'bold' }}>X</Text>
                    </View>
                    <View style={{ flex: 2, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold'}}>{msg}</Text>
                        <TouchableOpacity activeOpacity={1} style={{ backgroundColor: 'red', padding: 5, marginTop: 10 }} onPress={() => action()}>
                            <Text style={{ color: 'white' }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default CustomModal;