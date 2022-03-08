import React, {useState}from 'react'
import { View, Text,Button, TouchableHighlight,Modal,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Guias = createBottomTabNavigator(); 

function TelaHome({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Tela Home</Text>
            <Text>First Screen</Text>
        </View>
    )
}

function TelaCanal({navigation}){
  return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Tela Canal</Text>
          <Text>Second Screen</Text>
      </View>
  )
}

function TelaCursos({navigation}){
  return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Tela Canal</Text>
          <Text>Second Screen</Text>
  
      </View>
  )
}
// function TelaCursoReactNative({route,navigation}){
//   // const {aulas,autor} = route.params;
//   // const {aulas} = route.params;
//   // const {autor} = route.params;
//   const aulas = route.params.aulas;
//   const autor = route.params.autor;
//   return(
//       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//           <Text>CursoReactNative</Text>
//           <Text>Aulas: {aulas}</Text>
//           <Text>Autor: {autor}</Text>
//           <Button title="Ir para Home" onPress={()=>navigation.navigate('Home')}/>
//           <Button title="Voltar para cursos" onPress={()=>navigation.goBack()}/>
//       </View>
//   )
// }
export default function () {

  

  return (
    <NavigationContainer initialRouteName="Tela Home">
     <Guias.Navigator>
        <Guias.Screen name="Home" component={TelaHome} options={{title:'Tela Inicial',headerStyle:{backgroundColor:'blue'},headerTintColor:'white',headerRight:()=>(<Button title="Cursos" color="#000" onPress={()=>alert('Botão Cursos Clicado')}/>),}}/>
        <Guias.Screen name="Canal" component={TelaCanal} options={{title:'Tela Canal',headerStyle:{backgroundColor:'blue'},headerTintColor:'white',headerTitleStyle:'bold'}}/>
        <Guias.Screen name="Cursos" component={TelaCursos} options={{title:'Cursos do Canal',headerStyle:{backgroundColor:'blue'},headerTintColor:'white'}}/>
     </Guias.Navigator>
    </NavigationContainer>
    
  )
}

