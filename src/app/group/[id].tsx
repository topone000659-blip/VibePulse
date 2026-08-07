import { View, Text, StyleSheet } from "react-native";

export default function GroupDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Design Squad</Text>
      <Text style={styles.text}>Community members and group conversations.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    padding:25,
    paddingTop:60,
  },
  title:{
    color:"#fff",
    fontSize:32,
    fontWeight:"800",
  },
  text:{
    color:"#94A3B8",
    marginTop:15,
  },
});
