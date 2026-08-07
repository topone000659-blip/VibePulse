import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.item}>⚙ Account Settings</Text>
      <Text style={styles.item}>🔒 Privacy & Security</Text>
      <Text style={styles.item}>🌙 Dark Mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    padding:22,
    paddingTop:60,
  },
  title:{
    color:"#fff",
    fontSize:34,
    fontWeight:"800",
    marginBottom:30,
  },
  item:{
    color:"#fff",
    backgroundColor:"#1E293B",
    padding:18,
    borderRadius:18,
    marginBottom:12,
  },
});
