import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        borderRadius: 8,
        padding: 9,
        marginHorizontal: 24,
        marginVertical: 3,
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1, 
        color: '#F2F2F2', 
        fontSize: 12,  
        marginRight: 12
    },
    textDecorationLine: {
        flex: 1, 
        color: '#808080', 
        fontSize: 12,  
        marginRight: 12,
        textDecorationLine: "line-through"
    },
    img: {
        height: 15,
        width: 20,
        resizeMode: 'contain',
    }
})