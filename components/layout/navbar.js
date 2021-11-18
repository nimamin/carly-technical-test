import { useRouter } from 'next/router'
import AuthButton from './AuthButton'
import Langs from './langs'
import Link from 'next/link'
import translate from '../../lib/translation'
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
        title: 'Projects',
        href: '/projects'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
]
export default function Navbar() {
    const router = useRouter()
    const t = s => translate(s, router.locale)
    return (
        <div id="header">
            <div>
                <a href="index.html" className="logo"><img src="images/logo.png" alt="" /></a>
                <ul id="navigation">
                    {menu.map((item, i) => (
                        <li className={(router.pathname === item.href) ? 'selected': '' } key={`menu-item-${i}`}>
                            <Link href={item.href}>
                                <a>{t(item.title)}</a>
                            </Link>
                        </li>
                    ))}
                    <Langs />
                </ul>
                <AuthButton />
            </div>
        </div>
    )
}