import { API_URL } from '@/config';

export async function register(
  email: string,
  password: string
) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error('Registration failed');
  }

  return res.json();
}

export async function login(
  email: string,
  password: string
) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  return res.json();
}
