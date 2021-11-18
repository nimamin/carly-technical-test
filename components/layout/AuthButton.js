
import { useSession, signIn, signOut } from "next-auth/client"

export default () => {
    const [session, loading] = useSession()
    if (session) {
        return <button style={{ float: 'right'}} onClick={() => signOut()}>Sign out</button>
    }
    return <button style={{ float: 'right'}} onClick={() => signIn()}>Sign in</button>
}