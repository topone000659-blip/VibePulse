import { API_URL } from "@/config";\n

export async function register(email:string,password:string){
  const res = await fetch(`${API_URL}/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  return await res.json();
}

export async function login(email:string,password:string){
  const res = await fetch(`${API_URL}/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  return await res.json();
}

export async function getMessages(){
  const res = await fetch(`${API_URL}/messages`);
  return await res.json();
}

export async function sendMessage(user:string,text:string){
  const res = await fetch(`${API_URL}/messages`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      user,
      text
    })
  });

  return await res.json();
}
