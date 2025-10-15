import React, { useEffect } from 'react'
import { 
    TextInput,
    FlatList,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { someData } from '../data/data';
import { Ionicons } from '@expo/vector-icons';

export function SearchScreen() {
    const [ text, onChangeText ] = React.useState('');
    const [filerData, setFilterData] = React.useState(someData);
    
    useEffect(() => {
        if(text === '') {
            setFilterData(someData);
            return
        }
        const textNorm = text.toLowerCase();
        const newFilterData = someData.filter(item => {
            return item.title.toLowerCase().includes(textNorm);
        });

        setFilterData(newFilterData);
    }, [text])
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerToggleRight}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text>Taboão da Serra</Text>
                </View>

                <Image
                    style={styles.headerToggleLeft}
                    source={require('../assets/user-profile.png')}
                />
            </View>

            <TextInput
                style={styles.inputContent}
                multiline={true}
                onChangeText={onChangeText}
                value={text}
                placeholder='Digite um produto'
            />

            <FlatList
                data={filerData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.itemList, {backgroundColor: item.background}]}>
                        <Image source={item.imageId}/>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
                numColumns={2}
                keyExtractor={(index) => index.id.toString()}
            />
            {filerData.length === 0 && text !== '' && (
                <Text>Nenhum resultado para {text}</Text>
            )}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
    },
    headerToggleRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    headerToggleLeft: {
        resizeMode: 'contain',
        width: 40
    },
    inputContent: {
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 30,
        paddingHorizontal: 20,
        alignContent: 'center'
    },
    itemList: {
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
        marginVertical: 10
    }
    
})