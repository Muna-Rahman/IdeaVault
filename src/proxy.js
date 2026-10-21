import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Lightweight gate: only checks that a session cookie exists. The pages (and
// the API, via JWT) still validate the real session, so a forged cookie gets
// no data. Remembers where the visitor was going so login can send them back.
export function proxy(request) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set(
      "callbackUrl",
      request.nextUrl.pathname + request.nextUrl.search
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-ideas/:path*", "/add-idea/:path*", "/my-interactions/:path*"],
};