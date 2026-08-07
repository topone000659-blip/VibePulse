import { API_URL } from "../api";

export async function updateProfile(data:any){
  return fetch(`${API_URL}/api/features/profile`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  }).then(r=>r.json());
}
