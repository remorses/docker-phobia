import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import Inspect from 'vite-plugin-inspect'

import { nodeLoaderPlugin } from '@vavite/node-loader/plugin'

export default defineConfig({
    ssr: {
        // optimizeDeps: {
        //     include: ['react-spinners'],
        //     needsInterop: ['react-spinners'],
        // },

        noExternal: [/react-spinners/],
    },
    experimental: {
        // skipSsrTransform: true,
    },
    plugins: [
        // nodeLoaderPlugin(),
        Inspect(),
        remix({ appDirectory: 'src' }),
        tsconfigPaths(),
    ],
})
