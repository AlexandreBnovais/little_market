import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../ui';

export function SplashScreen() {
    const Navigator = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imgContent} source={require('../assets/main_image.png')}/>
            <View style={styles.textContent}>
                <Text style={styles.title}>Entregaremos mantimentos à sua porta</Text>
                <Text style={styles.paragraph}>
                    A mercearia oferece vegetais e frutas frescas.
                    Encomende itens frescos na mercearia.
                </Text>
            </View>

            <TouchableOpacity 
                onPress={() => Navigator.navigate('Tabs')}
                style={styles.buttonContent}
            >
                <Text style={styles.buttonText}>Iniciar</Text>
                <AntDesign name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContent: {
        resizeMode: 'contain',
        width: 300
    },
    textContent: {
        marginVertical: 30,
        gap: 20,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 700
    },
    paragraph: {
        textAlign: 'center',
        fontSize: Theme.FontSize.H1
    },
    buttonContent: {
        backgroundColor: Theme.Colors.PRIMARY,
        width: 200,
        paddingHorizontal: 40,
        borderRadius: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffff',
        fontSize: Theme.FontSize.H1,
    }
})