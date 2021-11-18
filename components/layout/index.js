import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div id="page">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}