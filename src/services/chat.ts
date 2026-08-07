import pb from "./pocketbase";

export async function sendMessage(text:string,user:string){
  return await pb.collection("messages").create({
    text,
    user,
  });
}

export async function getMessages(){
  return await pb.collection("messages").getFullList({
    sort:"-created"
  });
}
