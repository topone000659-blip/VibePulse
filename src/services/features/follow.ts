import { API_URL } from "../api";

export async function followUser(userId:string){
  return fetch(`${API_URL}/api/features/friends`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      userId
    })
  }).then(r=>r.json());
}
