import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { SearchScreen } from "../screens/searchScreen";
import { HomeScreen } from "../screens/homeScreen";
import { SplashScreen } from "../screens/splashScreen";
import { ShoppingScreen } from "../screens/shoppingScreen";

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const RootTabBar = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Shopping"
            screenOptions={( { route } ) => ({
            tabBarIcon: ({ color, size, focused}) => {
                let icon;

                if(route.name === 'Home') {
                    icon = focused ? 'home' : 'home-outline' 
                }else if(route.name === 'Search') {
                    icon = focused ? 'search' : 'search-outline'
                }else if(route.name === 'Shopping') { 
                    icon = focused ? 'cart' : 'cart-outline'
                }

                return <Ionicons name={icon} color={color} size={size}/>
            },
            headerShown: false
         })}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
            <Tab.Screen name="Shopping" component={ShoppingScreen}/>
        </Tab.Navigator>
    )
}