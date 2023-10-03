import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
      flex: 1,
    },
    containerImg: {
      height: 173,
      backgroundColor: '#0D0D0D',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imgLopo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    icons: {
      height: 15,
      resizeMode: 'contain'
    },
    input: {
      flex: 1,
      alignSelf: 'center',
      height: 45,
      borderRadius: 5,
      padding: 8,
      marginRight: 6,
      backgroundColor: '#262626',
      color: '#F2F2F2',
    },
    button: {
      backgroundColor: '#1E6F9F',
      height: 45,
      width: 45,
      borderRadius: 5,
      justifyContent: 'center',
    },
    containerInput:{
      marginTop: 150,
      position: 'absolute',
      flexDirection: "row",
      marginHorizontal: 24,
    },
    textView: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    statusTarefa: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginTop: 45,
      marginBottom: 15,
    },
    textTarefa: {
      color: '#4EA8DE',
    },
    textTarefaCont: {
      borderRadius: 20,
      backgroundColor: '#333333',
      color: '#D9D9D9',
      height: 16,
      width: 22,
      fontSize: 12,
      marginTop: 0,
      marginLeft: 10,
      textAlign: "center",
      fontWeight: 'bold'
    },
    tarefasView: {
      height: 200,
      marginHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:  '#333333',
      borderTopWidth: 1,
    },
    imgTarefasView: {
      width: 50,
      height: 50,
      marginBottom: 15,
      resizeMode: 'contain',
    }
  });