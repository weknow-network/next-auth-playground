import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
import LinkedInProvider from "next-auth/providers/linkedin";
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains

    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
      // authorization: { params: { scope: 'r_liteprofile' } },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
  ],
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    // brandColor: "#EE6668", // Hex color code
    logo: "https://weknow.network/images/Logo.svg", // Absolute URL to image
    // buttonText: "#EE333" // Hex color code
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign-in', { user, account, profile, email, credentials })
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, token, user }) {
    //   return session
    // },
  },
  session: {
    // // Choose how you want to save the user session.
    // // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // // If you use an `adapter` however, we default it to `"database"` instead.
    // // You can still force a JWT session by explicitly defining `"jwt"`.
    // // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // // which is used to look up the session in the database.
    // strategy: "database",
  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 40, // 40 seconds
  
    // // Seconds - Throttle how frequently to write to database to extend a session.
    // // Use it to limit write operations. Set to 0 to always update the database.
    // // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 30, // 30 seconds
    
    // // The session token is usually either a random UUID or string, however if you
    // // need a more customized session token string, you can define your own generate function.
    // generateSessionToken: () => {
    //   return randomUUID?.() ?? randomBytes(32).toString("hex")
    // }
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60, // 1 hour
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },
  // events: {
  //   async signIn(message) { console.log(message, 'sign-in'); },
  //   async signOut(message) { console.log(message, 'sign-out'); },
  //   async createUser(message) { console.log(message, 'user created')  },
  //   async updateUser(message) { console.log(message, 'user updated') },
  //   async linkAccount(message) { console.log(message, 'linked-account') },
  //   async session(message) { console.log(message, 'session is active')},
  // },
  // logger: {
  //   error(code, metadata) {
  //     console.error(code, metadata)
  //   },
  //   warn(code) {
  //     console.warn(code)
  //   },
  //   debug(code, metadata) {
  //     console.debug(code, metadata)
  //   }
  // }
}

export default NextAuth(authOptions)
