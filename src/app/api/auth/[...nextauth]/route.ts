// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                console.log("credentials : ", credentials)
                if (credentials.username === 'user' && credentials.password === 'pass') {
                    return { id: 1, name: 'User Credentials', email: 'user@example.com' };
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/signIn',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/new-user'
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Redirect users to /dashboard after sign-in
            return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : baseUrl;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAuthenticated = !!token.id; // Add custom property
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAuthenticated = true;
            }
            return token;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
