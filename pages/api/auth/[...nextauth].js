import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // Here Random Word Not Any Thing From Next Auth
  secret:process.env.SECRET,

  pages: {
    // signIn => KeyWord Don't Change avoid error
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
