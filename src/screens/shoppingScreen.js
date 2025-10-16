import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { someData } from '../data/data';
import { Shopping } from '../components/shopping';
import { Theme } from '../ui';

export function ShoppingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.toggleText}>Meu Carrinho</Text>

            <FlatList 
                data={someData}
                renderItem={({ item }) => (
                    <Shopping {...item}/>
                )}  
                keyExtractor={(index) => index.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <View>
                        <Text style={styles.buttonTitle}>Total a pagar</Text>
                        <Text style={styles.buttonSub}>$ 141,84</Text>
                    </View>

                    <View style={styles.payButton}>
                        <Text style={styles.payText}>Pagar agora</Text>
                    </View>
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20, 
    },
    toggleText: {
        fontSize: 24,
        fontWeight: 700,
        marginVertical: 40
    },
    buttonContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 20,
        marginBottom: 30,
        backgroundColor: Theme.Colors.PRIMARY,
    },
    buttonTitle: {
        fontSize: Theme.FontSize.H2,
        color: '#ffff',
    },
    buttonSub: {
        fontSize: Theme.FontSize.H1,
        color: '#ffff',
        fontWeight: 700
    },
    payButton: {
        borderWidth: 1,
        borderColor: '#ffff',
        padding: 10,
        borderRadius: 10
    },
    payText: {
        color: '#ffff',

    }
})