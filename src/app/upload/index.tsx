import {View,Text,Pressable} from "react-native";

export default function Upload(){

 return(
  <View style={{flex:1,backgroundColor:"#0F172A",padding:20}}>
   <Text style={{color:"#fff",fontSize:30}}>
    Upload
   </Text>

   <Pressable>
    <Text style={{color:"#06B6D4",marginTop:20}}>
     Select Image / Video
    </Text>
   </Pressable>

  </View>
 );
}
