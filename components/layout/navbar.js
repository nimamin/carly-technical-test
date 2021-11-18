import { useRouter } from 'next/router'
const menu = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Profile',
        href: '/profile'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
]
export default function Navbar() {
    const router = useRouter()
    return (
        <div id="header">
            <div>
                <a href="index.html" className="logo"><img src="images/logo.png" alt="" /></a>
                <ul id="navigation">
                    {menu.map((item, i) => (
                        <li className={(router.pathname === item.href) ? 'selected': '' } key={`menu-item-${i}`}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                    {/* 
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li className="selected">
                        <a href="about.html">About</a>
                    </li>
                    <li className="menu">
                        <a href="projects.html">Projects</a>
                        <ul className="primary">
                            <li>
                                <a href="proj1.html">proj 1</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu">
                        <a href="blog.html">Blog</a>
                        <ul className="secondary">
                            <li>
                                <a href="singlepost.html">Single post</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                     */}
                </ul>
            </div>
        </div>
    )
}