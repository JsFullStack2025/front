import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { API_CONFIG } from '@/lib/api/api.consts'

export const authOptions : NextAuthOptions = {
  
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username"},
        password: { label: "Password", type: "password",placeholder:"password"},
      },

    //   async authorize(credentials, req) {
    //     // Include hidden values here
    //     const data = {
    //       username: credentials?.username,
    //       password: credentials?.password,
    //     };
    //     console.log(data)
    //     try {
    //         const res = await fetch(API_CONFIG.Url+"/auth/login", {
    //             cache: 'no-store',
    //             method: "POST",
    //             headers: {
    //               "Content-Type": "application/json",
    //               "Accept": "application/json",
    //             },
    //             body: JSON.stringify({ data }),
    //             credentials: 'include',
    //           })

    //       const resData = await res.json();
    //       if (res.ok && resData && resData.data) {
    //         return resData.data;
    //       } else {
    //         console.error('Authorization failed:', resData);
    //         return null;
    //       }
    //     } catch (error) {
    //       console.error('Authorization error:', error);
    //       return null;
    //     }
    //   }

    async authorize(credentials) {
        // This is where you need to retrieve user data 
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "42", name: "Dave", password: "nextauth" }

        if (credentials?.username === user.name && credentials?.password === user.password) {
            return user
        } else {
            return null
        }
    }
    })
  ],
  pages: {
    signIn: '/login'
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session ({ session, token, user }) {
      session.user = token as any ;
      return session;
    }
  }
  
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}