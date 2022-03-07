import React, {useState}from 'react'
import { View, Text,Button, TouchableHighlight,Modal,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator(); 

function TelaHome({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Tela Home</Text>
            <Text>First Screen</Text>
            <Button title="Ir para Canal" onPress={()=>navigation.navigate('Canal')}/>
        </View>
    )
}

function TelaCanal({navigation}){
  return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Tela Canal</Text>
          <Text>Second Screen</Text>
          <Button title="Ir para Home" onPress={()=>navigation.navigate('Home')}/>
          <Button title="Voltar" onPress={()=>navigation.goBack('Home')}/>
      </View>
  )
}

export default function () {

  

  return (
    <NavigationContainer initialRouteName="Tela Home">
     <Pilha.Navigator>
        <Pilha.Screen name="Home" component={TelaHome} options={{title:'Tela Inicial'}}/>
        <Pilha.Screen name="Canal" component={TelaCanal} options={{title:'Tela Secundaria'}}/>
     </Pilha.Navigator>
    </NavigationContainer>
    
  )
}