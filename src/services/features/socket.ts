import { SOCKET_URL } from "@/config";\nimport { io } from "socket.io-client";



export const socket = io(SOCKET_URL,{
  transports:["websocket"]
});

export function connectChat(){
  socket.connect();
}

export function joinChat(room:string){
  socket.emit("join",room);
}

export function sendChat(data:any){
  socket.emit("message",data);
}

export function onMessage(callback:any){
  socket.on("message",callback);
}

export function disconnectChat(){
  socket.disconnect();
}
