import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // By default, the `id` property does not exist on `token` or `session`.
  callbacks: {
    jwt({ token, user }) {
      // Extending the Session to include user's id
      if (user) token.id = user.id;

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;

      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/home');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isOnRegister = nextUrl.pathname.startsWith('/register');

      if (isOnHome) {
        return isLoggedIn;
      }

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL('/home', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
