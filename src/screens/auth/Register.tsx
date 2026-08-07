import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { register } from "@/services/api";
import { router } from "expo-router";

export default function Register(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function handleRegister(){

    const data = await register(
      email,
      password
    );

    if(data.success){
      router.replace("/auth/login");
    }
  }


  return(
    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
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
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Register
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
    backgroundColor:"#06B6D4",
    padding:16,
    borderRadius:15,
    alignItems:"center"
  },
  buttonText:{
    color:"#fff",
    fontWeight:"700"
  }
});
