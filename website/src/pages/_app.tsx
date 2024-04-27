import { ViewTransitions } from 'website/src/hooks'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <ViewTransitions>
            <Component {...pageProps} />
        </ViewTransitions>
    )
}
