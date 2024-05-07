import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import Inspect from 'vite-plugin-inspect'


const building = process.env.NODE_ENV === 'production'

export default defineConfig({
    ssr: {
        // optimizeDeps: {
        //     include: ['react-spinners'],
        //     needsInterop: ['react-spinners'],
        // },

        noExternal: building || undefined,
    },
    experimental: {
        // skipSsrTransform: true,
    },
    legacy: {
        proxySsrExternalModules: true,
    },
    plugins: [
        // nodeLoaderPlugin(),
        // commonjs(),
        Inspect(),
        remix({ appDirectory: 'src' }),
        tsconfigPaths(),
    ],
})
