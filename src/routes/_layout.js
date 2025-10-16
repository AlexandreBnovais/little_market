import { createStackNavigator } from "@react-navigation/stack";

import { RootTabBar } from "./tabs";
import { SplashScreen } from "../screens/splashScreen";

const Stack = createStackNavigator();

export const RootLayout = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Tabs" component={RootTabBar}/>
        </Stack.Navigator>
    )
    
}