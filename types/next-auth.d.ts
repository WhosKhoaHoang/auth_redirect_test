import NextAuth from 'next-auth'

// Credit: https://stackoverflow.com/questions/74785412/
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string
  }

  // interface JWT {
  //   accessToken?: string
  // }
}

// Credit: https://github.com/nextauthjs/next-auth/discussions/4735
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
  }
}