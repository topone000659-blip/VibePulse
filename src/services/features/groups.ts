import { API_URL } from "../api";

export async function groups(){
  return fetch(`${API_URL}/api/features/groups`)
  .then(r=>r.json());
}
