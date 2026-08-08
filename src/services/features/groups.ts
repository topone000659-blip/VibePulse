import { API_URL } from "@/config";

export type Group = {
  id: string;
  name: string;
  avatar?: string;
  description?: string;
  memberCount?: number;
};

export async function getGroups(): Promise<Group[]> {
  const response = await fetch(
    `${API_URL}/api/features/groups`
  );

  if (!response.ok) {
    throw new Error("Failed to load groups");
  }

  return response.json();
}

export async function createGroup(
  name: string,
  description: string = ""
) {
  const response = await fetch(
    `${API_URL}/api/features/groups`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create group");
  }

  return response.json();
}

export async function getGroup(
  groupId: string
) {
  const response = await fetch(
    `${API_URL}/api/features/groups/${groupId}`
  );

  if (!response.ok) {
    throw new Error("Failed to load group");
  }

  return response.json();
}
