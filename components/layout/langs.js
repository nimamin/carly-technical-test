import { useRouter } from 'next/router'
import { setCookies } from 'cookies-next';
export default () => {
    const router = useRouter()
    const locale = router.locale;
    const locales = router.locales.filter(l => l !== locale);
    const handleSwitch = (e, l) => {
        e.preventDefault();
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: l })
    }
    return (
        <li className="menu">
            <a href="#">{locale}</a>
            <ul className="primary">
                {locales.map(l => (
                    <li>
                        <a href="#" onClick={(e) => { handleSwitch(e, l) }}>{l}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}