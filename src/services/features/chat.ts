import { API_URL } from "../api";

export async function realtimeChat(){
  return fetch(`${API_URL}/api/features/realtime`)
  .then(r=>r.json());
}
