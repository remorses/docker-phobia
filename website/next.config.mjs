import { withElacca } from 'elacca'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
}

export default withElacca()(nextConfig)
