import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../ui';

export function Category({ title, imageId, background }) {
    return(
        <TouchableOpacity style={[categoryStyle.container, { backgroundColor: background }]}>
            <Image
                style={categoryStyle.imgObj} 
                source={imageId}
            />
            <View style={categoryStyle.textContainer}>
                <Text style={categoryStyle.textObj}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const categoryStyle = StyleSheet.create({ 
    container: {
      width: 150,
      height: 180,
      backgroundColor:'blue',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginRight: 10,
      borderRadius: 25,
    },
    imgObj: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textContainer: {
        borderRadius: 25,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: Theme.Colors.SHADOW
    },
    textObj: {
        fontSize: Theme.FontSize.H5,
        color: Theme.Colors.TEXT,
        
    }
})