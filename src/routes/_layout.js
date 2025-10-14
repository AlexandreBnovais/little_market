import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import { HomeScreen } from '../screens/homeScreen';
import { ShoppingScreen } from '../screens/shoppingScreen';
import { SplashScreen } from '../screens/splashScreen';
import { SearchScreen } from '../screens/searchScreen';

const Stack = createStackNavigator();

export function RootLayout() {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Splash' component={ShoppingScreen} />
            <Stack.Screen name='Shopping' component={SplashScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
        </Stack.Navigator>
    )
}