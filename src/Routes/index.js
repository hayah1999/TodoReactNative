import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>

            {/* <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Details" component={Details} />
            </Tab.Navigator> */}
            {/* <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} />
            </Drawer.Navigator> */}
        </NavigationContainer>
    )
}
export default Router;