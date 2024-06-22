import './globals.css'
import './framer/styles.css'
import './framer/tokens.css'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className='' lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body className='dark min-h-full'>
                <div className='min-h-[100vh] dark flex flex-col h-full text-white bg-black'>
                    {children}
                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
