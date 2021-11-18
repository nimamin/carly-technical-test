import React from 'react';
import Head from 'next/head';
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from 'next/router'
import Loading from '../components/Loading'

export default () => {
    const [session, loading] = useSession();
    const router = useRouter()
    console.log({router})
    if (loading) return (<Loading />);
    else if (!session) {
        router.replace('/api/auth/signin')
        return (<></>)
    }
    return (
        <>
            <Head>
                <title>projects - Space Science Website Template</title>
            </Head>
            <div id="body">
                <div className="header">
                    <div>
                        <h1>Projects</h1>
                        <ul>
                            <li>
                                <a href="proj1.html"><img src="/images/curious-rover.jpg" alt="" /></a>
                                <div>
                                    <h1>MARS CURIOSITY ROVER </h1>
                                    <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use.</p>
                                    <a href="proj1.html" className="more">Read More</a>
                                </div>
                            </li>
                            <li>
                                <a href="proj1.html"><img src="/images/space-station.jpg" alt="" /></a>
                                <div>
                                    <h1>INTERTERNATIONAL SPACE STATION</h1>
                                    <p>Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special.</p>
                                    <a href="proj1.html" className="more">Read More</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

