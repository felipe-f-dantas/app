
// aplicativo teste login sem api e sem banco de dados
import React, {useState}from 'react'
import { View, Text,Button, TouchableHighlight,Modal,StyleSheet } from 'react-native'
import TextBox from './components/TextBox'
import FO from './components/FO';

export default function App(props) {

  const [visivel,setVisivel] = useState(false)

  return (
    <View>
      
      <TextBox/>
      <Modal animationType="fade" transparent={true} visible={visivel} style={{}}>
      <View style={estilos.modal}>
      <FO/>
      <Button title="Enviar" onPress={()=>{setVisivel(false)}}/>
      </View>
      </Modal>
      
      <Button title="Esqueci Minha Senha" onPress={()=>{setVisivel(true)}}/>
      
    </View>




  )
}
const estilos=StyleSheet.create({

  modal:{
      backgroundColor:"#BFE0FF",
      margin:20,
      padding:20,
      borderRadius:20,
      elevation:10,

  },

  txt:{
      color:"white"
  }
})
