import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getMessages, sendMessage } from "@/services/api";
import { connectChat, joinChat, onMessage } from "@/services/features/socket";

export default function Chats(){

  const [messages,setMessages]=useState<any[]>([]);
  const [text,setText]=useState("");

  async function load(){
    const data=await getMessages();
    setMessages(data);
  }

  async function send(){
    if(!text) return;

    await sendMessage(
      "VibeUser",
      text
    );

    setText("");
    load();
  }

  useEffect(()=>{
    load();
  },[]);


  return(
    <View style={styles.container}>

      <FlatList
        data={messages}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=>(
          <View style={styles.card}>
            <Text style={styles.user}>
              {item.user}
            </Text>
            <Text style={styles.msg}>
              {item.text}
            </Text>
          </View>
        )}
      />

      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Message..."
          placeholderTextColor="#94A3B8"
        />

        <Pressable
          style={styles.send}
          onPress={send}
        >
          <Text style={{color:"#fff"}}>
            Send
          </Text>
        </Pressable>
      </View>

    </View>
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    padding:15
  },
  card:{
    backgroundColor:"#1E293B",
    padding:15,
    borderRadius:15,
    marginBottom:10
  },
  user:{
    color:"#06B6D4",
    fontWeight:"700"
  },
  msg:{
    color:"#fff",
    marginTop:5
  },
  bottom:{
    flexDirection:"row",
    gap:10
  },
  input:{
    flex:1,
    backgroundColor:"#1E293B",
    color:"#fff",
    padding:12,
    borderRadius:15
  },
  send:{
    backgroundColor:"#6D28D9",
    padding:15,
    borderRadius:15
  }
});
