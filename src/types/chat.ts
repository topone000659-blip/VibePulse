export type MessageType =
  | "text"
  | "image"
  | "audio"
  | "file";

export type MessageStatus =
  | "sending"
  | "sent"
  | "delivered"
  | "read";

export type ChatUser = {
  id: string;
  name: string;
  username?: string;
  avatar?: string;
  online?: boolean;
};

export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  text?: string;
  type: MessageType;
  mediaUrl?: string;
  fileName?: string;
  fileSize?: number;
  createdAt: string;
  status: MessageStatus;
};

export type Chat = {
  id: string;
  user: ChatUser;
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
  muted?: boolean;
};

export type ChatState = {
  chats: Chat[];
  messages: Record<string, Message[]>;
  loading: boolean;
  error?: string | null;
};

