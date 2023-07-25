import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const options = {
  providers: [
    Google({
      //Change this to Google Client ID and Secret
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
}

const authHandler = (req, res) => NextAuth(req, res, options)

export default authHandler;