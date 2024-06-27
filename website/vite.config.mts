import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'
import { cjsInterop } from 'vite-plugin-cjs-interop'
import nodeResolve from '@rollup/plugin-node-resolve'

const building = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,
    plugins: [
        Inspect(),

        remix({
            appDirectory: 'src',

            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
            },
        }),
        tsconfigPaths(),
        EnvironmentPlugin('all', { prefix: 'PUBLIC_' }),
        cjsInterop({ dependencies: ['react-spinners/BarLoader'] }),
    ],

    ssr: {
        noExternal: building || undefined,
        external: building ? ['@prisma/client'] : undefined,
    },
    legacy: {
        proxySsrExternalModules: true,
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
