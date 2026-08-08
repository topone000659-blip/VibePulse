import pb from "./pocketbase";

export type ChatMessage = {
  id: string;
  text: string;
  user: string;
  created: string;
  type?: "text" | "image" | "audio" | "file";
  mediaUrl?: string;
};

export async function sendMessage(
  text: string,
  user: string
) {
  const cleanText = text.trim();

  if (!cleanText) {
    throw new Error("Message cannot be empty");
  }

  return await pb.collection("messages").create({
    text: cleanText,
    user,
    type: "text",
  });
}

export async function getMessages() {
  return await pb.collection("messages").getFullList({
    sort: "created",
  });
}

export async function getMessagesForUser(
  user: string
) {
  return await pb
    .collection("messages")
    .getFullList({
      filter: `user = "${user}"`,
      sort: "created",
    });
}

export function subscribeToMessages(
  callback: (message: ChatMessage) => void
) {
  return pb
    .collection("messages")
    .subscribe("*", (event) => {
      if (event.action === "create") {
        callback(event.record as unknown as ChatMessage);
      }
    });
}

export async function unsubscribeFromMessages() {
  await pb.collection("messages").unsubscribe("*");
}
