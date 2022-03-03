import React, { useState } from 'react'
import { View, Text,TextInput } from 'react-native'

export default function () {

  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");


  return (
    <View>
      <Text>Nome</Text>
        <TextInput style={{ borderWidth: 1, borderColor: "blue" }} value={nome} onChangeText={text=>setNome(text)} />
      <Text>Email</Text>
        <TextInput style={{ borderWidth: 1, borderColor: "blue" }} value={email} onChangeText={text=>setEmail(text)} />
      <Text>Senha</Text>
        <TextInput style={{ borderWidth: 1, borderColor: "blue" }} value={senha} onChangeText={text=>setSenha(text)} />
    
    </View>
  )
}
