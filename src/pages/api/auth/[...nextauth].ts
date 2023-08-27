import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

export const options: NextAuthOptions = {
  providers: [
    {
      id: "test",
      name: "Test123",
      type: "oauth",
      
      clientId: "123",
      clientSecret: "456",

      authorization: { url: `${process.env.OAUTH_SERVER_URL}/authorize`, params: { scope: "openid" } },
      idToken: true,
      token: `${process.env.OAUTH_SERVER_URL}/token`,
      issuer: process.env.OAUTH_SERVER_URL,
      jwks_endpoint: `${process.env.OAUTH_SERVER_URL}/jwks`,
      //checks: ["state"],

      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
        }
      },
    }
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        // Need to set accessToken property on token so
        // that it's available in the session() callback
        token.accessToken = account.access_token;
      }
      //console.log("token: ", token)
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client. In other words, Set properties on
      // session so that such values appear when we use useSession() within
      // a component to be rendered on the FE.
      session.accessToken = token.accessToken
      //console.log("session: ", session)
      return session
    }
  }
}

export default NextAuth(options)