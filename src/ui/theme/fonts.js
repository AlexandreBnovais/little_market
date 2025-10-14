import { useEffect } from 'react';
import { 
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const Fonts = () => {
    const [ loaded , error ] = useFonts({ 
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useEffect(() => {
        if( loaded | error ) { 
            SplashScreen.hideAsync();
        }
    }, [ loaded, error]);

    if(!loaded && !error) {
        return null;
    }
}