
// import withSession from '../lib/session'
import { useSession, signIn, signOut } from "next-auth/client"

// export const getServerSideProps = withSession(async function ({ req, res }) {
//     if (!req.session.user) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: { user },
//     }
// })

const Profile = () => {
    const { data: session } = useSession()
    console.log({ session })
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Profile