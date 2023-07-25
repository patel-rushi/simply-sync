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
