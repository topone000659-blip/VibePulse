import { View, Text, StyleSheet, TextInput } from "react-native";

export default function ChatDetail() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            A
          </Text>
        </View>

        <View style={styles.user}>
          <Text style={styles.name}>
            Alex
          </Text>
          <Text style={styles.status}>
            Online
          </Text>
        </View>

        <Text style={styles.action}>
          📞  🎥
        </Text>
      </View>


      <View style={styles.messages}>

        <View style={styles.receive}>
          <Text style={styles.text}>
            Hey! How are you? 😊
          </Text>
        </View>

        <View style={styles.send}>
          <Text style={styles.text}>
            I'm good! Welcome to Vibe Pulse ✨
          </Text>
        </View>

        <View style={styles.receive}>
          <Text style={styles.text}>
            This app looks amazing 🔥
          </Text>
        </View>

        <View style={styles.media}>
          <Text style={styles.text}>
            🖼️ Photo preview
          </Text>
        </View>

      </View>


      <View style={styles.input}>
        <TextInput
          placeholder="Message..."
          placeholderTextColor="#94A3B8"
          style={styles.field}
        />

        <Text style={styles.sendIcon}>
          ➤
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    paddingTop:50,
  },

  header:{
    backgroundColor:"#1E293B",
    padding:18,
    flexDirection:"row",
    alignItems:"center",
  },

  avatar:{
    width:48,
    height:48,
    borderRadius:24,
    backgroundColor:"#6D28D9",
    justifyContent:"center",
    alignItems:"center",
  },

  avatarText:{
    color:"#fff",
    fontWeight:"800",
  },

  user:{
    flex:1,
    marginLeft:12,
  },

  name:{
    color:"#fff",
    fontSize:18,
    fontWeight:"700",
  },

  status:{
    color:"#06B6D4",
  },

  action:{
    color:"#fff",
    fontSize:20,
  },

  messages:{
    flex:1,
    padding:20,
  },

  receive:{
    alignSelf:"flex-start",
    backgroundColor:"#1E293B",
    padding:14,
    borderRadius:18,
    marginBottom:12,
    maxWidth:"80%",
  },

  send:{
    alignSelf:"flex-end",
    backgroundColor:"#6D28D9",
    padding:14,
    borderRadius:18,
    marginBottom:12,
    maxWidth:"80%",
  },

  media:{
    backgroundColor:"#06B6D4",
    padding:18,
    borderRadius:18,
    alignSelf:"flex-start",
  },

  text:{
    color:"#fff",
  },

  input:{
    flexDirection:"row",
    padding:15,
    backgroundColor:"#1E293B",
    alignItems:"center",
  },

  field:{
    flex:1,
    color:"#fff",
    backgroundColor:"#0F172A",
    borderRadius:25,
    paddingHorizontal:18,
    height:45,
  },

  sendIcon:{
    color:"#06B6D4",
    fontSize:25,
    marginLeft:15,
  },
});
