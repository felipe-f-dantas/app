import React,{useState} from "react";
import { Text, View, TextInput,Button,Alert,TouchableHighlight,StyleSheet } from "react-native";


export default function () {


    const [nome,setNome] = useState("");
    const [senha,setSenha] = useState("");

    return (

        <View>
            <Text>Login</Text>
            <TextInput style={{ borderWidth: 1, borderColor: "black" }} value={nome} onChangeText={text=>setNome(text)} />
            <Text>Senha</Text>
            <TextInput style={{ borderWidth: 1, borderColor: "black" }} value={senha} onChangeText={text=>setSenha(text)} />

            <Text>{nome}</Text>
            <Text>{senha}</Text>
            <Button title="Logar" onPress={()=>Alert.alert('Logou kkkk','Nao tem API :(')}/>
           

        </View>

       
    )
}

