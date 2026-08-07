import { API_URL } from "../api";

export async function friends(){
  return fetch(`${API_URL}/api/features/friends`)
  .then(r=>r.json());
}
