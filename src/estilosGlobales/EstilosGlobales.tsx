import { StyleSheet } from "react-native";


export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    entrada: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      color: 'blue'
     },
    logo: {
      alignSelf: 'center',
      width: 120,
      height: 140,
      marginBottom: 40
  },
    titulo: {
      textAlign: 'center',
      marginVertical: 8,
    },
    bienvenidos: {
      textAlign:'center',
      marginVertical: 10,
      fontSize: 40
    },
    ajustarTexto: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    separador: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });