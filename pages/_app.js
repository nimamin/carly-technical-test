import Layout from '../components/layout'
// import { SessionProvider } from "next-auth/client"

import '../styles/style.css'
import '../styles/mobile.css'
// import '../styles/globals.css'

// export default function MyApp({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SessionProvider>
//   )
// }
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
