import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <div className='dark h-full text-white bg-black'>
            <Component {...pageProps} />
        </div>
    )
}
