//ToDO: Remove this duplicate index file of root directory but still keeping locahost:3000/ free from "No Page Found"
import { getSession } from 'next-auth/react'

export default function HomePage({ session }) {
  return <div>Welcome {session.user.name}!</div>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/app/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
