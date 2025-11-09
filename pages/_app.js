import '../styles/globals.css'
import Nav from '../components/Nav'


export default function App({ Component, pageProps }) {
return (
<>
<Nav />
<main className="container py-6">
<Component {...pageProps} />
</main>
</>
)
}