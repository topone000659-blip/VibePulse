import {View,Text,StyleSheet} from "react-native";

export default function Groups(){

 return(
  <View style={styles.container}>
   <Text style={styles.title}>
    Groups
   </Text>

   <Text style={styles.text}>
    Create / Join Groups
   </Text>
  </View>
 );

}

const styles=StyleSheet.create({
 container:{flex:1,backgroundColor:"#0F172A",padding:20},
 title:{color:"#fff",fontSize:30,fontWeight:"800"},
 text:{color:"#06B6D4",marginTop:20}
});
