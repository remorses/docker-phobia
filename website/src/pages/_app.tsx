import { ViewTransitions } from 'website/src/hooks'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <ViewTransitions>
            <div className='dark h-full text-white bg-black'>
                <Component {...pageProps} />
            </div>
        </ViewTransitions>
    )
}
