import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

const options = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
}

const authHandler = (req, res) => NextAuth(req, res, options)

export default authHandler;