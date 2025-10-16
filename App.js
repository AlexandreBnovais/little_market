import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootLayout } from './src/routes/_layout';

export default function App() {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <RootLayout />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}