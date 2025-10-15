import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootTabBar } from './src/routes/tabs';

export default function App() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <RootTabBar />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}