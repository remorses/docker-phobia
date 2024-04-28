import { withElacca } from 'elacca'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        if (process.env.NODE_ENV === 'development') {
            return []
        }
        // redirect / to github
        return [
            {
                source: '/',
                destination: 'https://github.com/remorses/docker-phobia',
                permanent: false,
            },
        ]
    },
}

export default withElacca()(nextConfig)
