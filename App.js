import { useEffect } from 'react';
import * as splashScreen from 'expo-splash-screen';
import { 
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootLayout } from './src/routes/_layout';

splashScreen.preventAutoHideAsync();

export default function App() {
    const [ loaded , error ] = useFonts({ 
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    });
    
    useEffect(() => {
        if( loaded | error ) {
            splashScreen.hideAsync();
        } 
    }, [loaded , error]);

    if(!loaded | !error ) {
        return null;
    }

    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <RootLayout />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}