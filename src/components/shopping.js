import { 
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet
} from "react-native";
import { Theme } from "../ui";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export function Shopping({ 
    title,
    imageId,
    price,
    itens,
    background
}) {

    return (
        <View style={styles.container}>
            <View style={styles.toggleRight}>
                <Image
                    style={[styles.img, {backgroundColor: background}]} 
                    source={imageId}
                />

                <View>
                    <Text style={styles.textPrimary}>{title}</Text>
                    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <Text style={styles.priceText}>$ {price}</Text>
                        <Text style={styles.priceTextItem}>{itens} Itens</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{flexDirection: 'row'}}>
                <EvilIcons name="pencil" size={24} color="black" />
                <Text>Editar</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggleRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    img: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 50
    },
    textPrimary: {
        fontSize: Theme.FontSize.H1,
        fontWeight: '500'
    },
    textSecondary: { 
        fontSize: Theme.FontSize.H2
    },
    priceText: {
        fontSize: Theme.FontSize.H1,
        fontWeight: '700',
    },
    priceTextItem: {
        fontSize: Theme.FontSize.H2
    }
})