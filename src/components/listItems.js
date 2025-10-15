import { 
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet
} from "react-native";
import { Theme } from "../ui";

export function ListItem({ 
    title,
    date,
    imageId,
    price,
    itens,
    background
}) {

    return (
        <TouchableOpacity style={listStyle.container}>
            <View style={listStyle.toggleRight}>
                <Image
                    style={[listStyle.img, {backgroundColor: background}]} 
                    source={imageId}
                />

                <View>
                    <Text style={listStyle.textPrimary}>{title}</Text>
                    <Text style={listStyle.textSecondary}>{date}</Text>
                </View>
            </View>

            <View style={{ alignItems: "flex-end"}}>
                <Text style={listStyle.priceText}>$ {price}</Text>
                <Text style={listStyle.priceTextItem}>{itens} Itens</Text>
            </View>
        </TouchableOpacity>
    )
}


const listStyle = StyleSheet.create({ 
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