// Single source of truth for the backend URL.
// Falls back to localhost:5000 and strips any trailing slash so URLs never
// become "undefined/ideas" or "https://host//ideas".
export const API_URL = (
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"
).replace(/\/+$/, "");