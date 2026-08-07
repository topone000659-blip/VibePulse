import * as ImagePicker from "expo-image-picker";

export async function pickMedia(){

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:["images","videos"],
    allowsEditing:true
  });

  if(!result.canceled){
    return result.assets[0];
  }

  return null;
}
