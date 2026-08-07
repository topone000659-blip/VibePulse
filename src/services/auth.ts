import pb from "./pocketbase";

export async function register(email:string,password:string){
  return await pb.collection("users").create({
    email,
    password,
    passwordConfirm: password,
  });
}

export async function login(email:string,password:string){
  return await pb.collection("users")
    .authWithPassword(email,password);
}

export function logout(){
  pb.authStore.clear();
}

export function user(){
  return pb.authStore.model;
}
