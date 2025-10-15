import { 
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { someData } from '../data/data';
import { ListItem } from '../components/listItems';
import { Category } from '../components/category';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../ui';


export function HomeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.mainContainer}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.header}>
                    <View style={styles.headerToggleRight}>
                        <Ionicons name="location-outline" size={24} color="black" />
                        <Text style={Theme.FontSize.H2}>Taboão da Serra</Text>
                    </View>

                    <Image
                        style={styles.headerToggleLeft}
                        source={require('../assets/user-profile.png')}
                    />
                </View>


                <View style={styles.title}>
                    <Text>Seja bem-vindo</Text>
                    <Text style={styles.textTitle}>Vamos pedir itens fresquinhos para você ?</Text>
                </View>

                <Text style={styles.textMainHeader}>Categoria</Text>
                <FlatList 
                    data={someData}
                    keyExtractor={(index, item) => index + item}
                    renderItem={({ item }) => (
                        <Category {...item}/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.textMainHeader}>Minhas Compras</Text>
                <FlatList 
                    renderItem={({ item }) => (
                        <ListItem {...item}/>
                    )}
                    data={someData}
                    keyExtractor={(index) => index.id.toString()}
                    scrollEnabled={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
    },
    mainContainer: {
        flex: 1
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


    title: {
        marginBottom: 30,
    },
    textTitle: {
        fontSize: Theme.FontSize.H1,
        fontWeight: 500,
    },

    mainHeader: {
        flex: 1,
        borderRadius: 30,
        marginVertical: 30
    },
    textMainHeader: {
        fontSize: Theme.FontSize.H1,
        marginVertical: 30,
        fontWeight: 500
    },

})