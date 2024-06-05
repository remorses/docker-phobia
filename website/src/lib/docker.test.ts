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
    expect(manifest).toBeDefined()
    const blob = await client.getBlob('debian', manifest.layers[0].digest)
    console.log(Object.fromEntries(blob.headers.entries()))
    // const text = await blob.text()
    // console.log(text)
})
