"use client";

import { authClient } from "./auth-client";
import { API_URL } from "./api";

/**
 * fetch() against the IdeaVault API with the signed-in user's JWT attached.
 * `path` is relative to the API, e.g. authFetch("/ideas", { method: "POST", body }).
 * Throws an Error (with .status = 401) when there is no valid session.
 */
export async function authFetch(path, options = {}) {
  let token = null;
  try {
    const { data } = await authClient.token();
    token = data?.token || null;
  } catch {
    token = null;
  }

  if (!token) {
    const err = new Error("Your session expired. Please log in again.");
    err.status = 401;
    throw err;
  }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });
}

/** Pulls the server's `message` out of an error response. */
export async function readError(response, fallback) {
  try {
    const data = await response.json();
    return data?.message || fallback;
  } catch {
    return fallback;
  }
}