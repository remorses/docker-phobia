import {
    shell,
    getDopplerEnv,
    getCurrentStage,
    deployFly,
} from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    const stage = getCurrentStage()
    const env = await getDopplerEnv({ stage: 'production', project: 'website' })
    await Promise.all([
        shell(`pnpm build`, {
            env,
        }),
    ])
    const port = 9696
    await deployFly({
        appName: 'dockerphobia',
        port,
        buildRemotely: true,
        dockerfile: 'Dockerfile',
        forceHttps: false,
        minInstances: 1,
        maxInstances: 3,
        healthCheckPath: '/api/health',
        memorySize: '512mb',
        
        env: {
            ...env,
            NODE_ENV: 'production',
            PORT: port,
        },
        regions: ['iad'],
    })
}

main()
