import { API_URL } from "@/config";

/* =========================
   PHONE AUTH
========================= */

export async function requestCode(
  countryCode: string,
  phone: string
) {
  const res = await fetch(`${API_URL}/auth/request-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countryCode,
      phone,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send verification code");
  }

  return res.json();
}


export async function verifyCode(
  countryCode: string,
  phone: string,
  code: string
) {
  const res = await fetch(`${API_URL}/auth/verify-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countryCode,
      phone,
      code,
    }),
  });

  if (!res.ok) {
    throw new Error("Invalid verification code");
  }

  return res.json();
}


/* =========================
   CHAT
========================= */

export async function getChats(
  token: string
) {
  const res = await fetch(`${API_URL}/chats`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to load chats");
  }

  return res.json();
}


export async function getMessages(
  token: string,
  userId: string
) {
  const res = await fetch(
    `${API_URL}/chats/${userId}/messages`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load messages");
  }

  return res.json();
}


export async function sendMessage(
  token: string,
  userId: string,
  message: string
) {
  const res = await fetch(
    `${API_URL}/chats/${userId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}
