import { expect, test } from 'vitest'

import { Client, DockerAuthenticator } from 'dockside'

const client = new Client({})

test('docker manifest', async () => {
    const manifest = await client.get('debian:bullseye')
    console.log(manifest)
    expect(manifest).toBeDefined()
})

test('docker manifest', async () => {
    const manifest = await client.getManifest('debian:bullseye', 'linux/amd64')
    console.log(manifest)
    const blob = await client.getBlob(
        'debian:bullseye',
        manifest.config.digest,
    )
    const text = await blob.text()
    expect(manifest).toBeDefined()
    console.log(text)
})
