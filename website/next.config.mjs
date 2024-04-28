import { withElacca } from 'elacca'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
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
