import { getSession } from 'next-auth/react'

export default function HomePage({ session }) {
  return <div>Welcome !</div>
}

//ToDO: Understand the getServerSideProps logic and see if it's needed
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session },
  }
}
