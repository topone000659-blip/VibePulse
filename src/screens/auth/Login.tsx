import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { login } from "@/services/api";
import { router } from "expo-router";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function handleLogin(){
    const data = await login(email,password);

    if(data.token){
      router.replace("/(tabs)/chats");
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    justifyContent:"center",
    padding:25
  },
  title:{
    color:"#fff",
    fontSize:32,
    fontWeight:"800",
    marginBottom:25
  },
  input:{
    backgroundColor:"#1E293B",
    color:"#fff",
    padding:15,
    borderRadius:15,
    marginBottom:15
  },
  button:{
    backgroundColor:"#6D28D9",
    padding:16,
    borderRadius:15,
    alignItems:"center"
  },
  buttonText:{
    color:"#fff",
    fontWeight:"700"
  }
});
