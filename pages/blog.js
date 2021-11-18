import React from 'react';
import Head from 'next/head';
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from 'next/router'
import Loading from '../components/Loading'

export default () => {
    const [session, loading] = useSession();
    const router = useRouter()
    if (loading) return (<Loading />)
    else if (!session) {
        router.replace('/api/auth/signin')
        return (<></>)
    }
    return (
        <>
            <Head>
                <title>blog - Space Science Website Template</title>
            </Head>
            <div id="body">
                <div className="header">
                    <div>
                        <h1>Blog</h1>
                        <div className="article">
                            <ul>
                                <li>
                                    <a href="singlepost.html"><img src="images/astronaut.jpg" alt=""/></a>
                                    <h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
                                    <span>FEBRUARY 6, 2023</span>
                                    <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
                                    <a href="singlepost.html" className="more">Read More</a>
                                </li>
                                <li>
                                    <a href="singlepost.html"><img src="images/satellite-dish.jpg" alt=""/></a>
                                    <h1>ALIEN SIGNAL DISCOVERY</h1>
                                    <span>FEBRUARY 3, 2023</span>
                                    <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
                                    <a href="singlepost.html" className="more">Read More</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar">
                            <ul>
                                <li>
                                    <h1>FEATURED POSTS</h1>
                                    <a href="singlepost.html"><img src="images/moon-satellite.jpg" alt=""/></a>
                                    <h2>SOYUZ TMA-M</h2>
                                    <span>FEBRUARY 6, 2023</span>
                                </li>
                                <li>
                                    <h1>RECENT POSTS</h1>
                                    <ul>
                                        <li>
                                            <a href="singlepost.html"><img src="images/alien-life.jpg" alt=""/></a>
                                            <h2>ALIEN LIFE</h2>
                                            <span>FEBRUARY 3, 2023</span>
                                        </li>
                                        <li>
                                            <a href="singlepost.html"><img src="images/galaxy.jpg" alt=""/></a>
                                            <h2>THE GALAXY</h2>
                                            <span>FEBRUARY 1, 2023</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

