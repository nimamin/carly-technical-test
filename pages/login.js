import React, { Component } from 'react';
import Head from 'next/head';
import { signIn } from 'next-auth/client'

class About extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>login - Space Science Website Template</title>
                </Head>
                <div id="body">
                <div className="header">
                    <div className="contact">
                        <h1>Login</h1>
                            <form action="index.html" method="post" onSubmit={(e) => {
                                e.preventDefault()
                                signIn("credentials", {
                                    redirect: false,
                                    username: "nima",
                                    password: "amin",
                                })
                                    .then((error) => console.log(error))
                                    .catch((error) => console.log(error));
                        }}>
                            <input type="text" placeholder="Enter Your email" name="email" />
                            <input type="password" placeholder="Enter Your password" name="password" />
                            <input type="submit" value="Login" name="submit" id="submit" />
                        </form>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default About;