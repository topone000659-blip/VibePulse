import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { updateProfile } from "@/services/features/profile";

export default function Profile(){

  const [bio,setBio]=useState("");

  async function save(){
    await updateProfile({bio});
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Bio"
        placeholderTextColor="#94A3B8"
        value={bio}
        onChangeText={setBio}
      />

      <Pressable style={styles.button} onPress={save}>
        <Text style={styles.text}>Save Profile</Text>
      </Pressable>

    </View>
  );
}

const styles=StyleSheet.create({
 container:{flex:1,backgroundColor:"#0F172A",padding:20},
 title:{color:"#fff",fontSize:30,fontWeight:"800"},
 input:{marginTop:20,backgroundColor:"#1E293B",color:"#fff",padding:15,borderRadius:15},
 button:{marginTop:20,backgroundColor:"#6D28D9",padding:15,borderRadius:15},
 text:{color:"#fff",textAlign:"center"}
});
