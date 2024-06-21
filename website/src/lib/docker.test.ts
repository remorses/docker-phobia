import { expect, test } from 'vitest'
import path from 'path'
import fs from 'fs'

import { Client, DockerAuthenticator } from 'dockside'

const client = new Client({})

test('docker manifest', async () => {
    const manifest = await client.get('debian:bullseye')
    console.log(manifest)
    expect(manifest).toBeDefined()
})

test(
    'docker manifest',
    async () => {
        const manifest = await client.getManifest('postgres', 'linux/amd64')
        // console.log(manifest)
        expect(manifest).toBeDefined()
        // application/vnd.docker.image.rootfs.diff.tar.gzip
        console.log(manifest.layers)
        const out = 'postgres-layers'
        await fs.promises.rmdir(out, { recursive: true }).catch((e) => null)
        fs.mkdirSync(out, { recursive: true })
        const reversed = [...manifest.layers].reverse()
        for (let [index, layer] of reversed.entries()) {
            console.log(index)
            const blob = await client.getBlob(`postgres`, layer.digest)
            if (!blob.ok) {
                console.log(blob.status)
                continue
            }
            console.log(blob.headers.get('Content-Type'), layer.mediaType)
            fs.writeFileSync(
                path.resolve(out, `${index}.tar.gz`),
                Buffer.from(await blob.arrayBuffer()),
                'utf-8',
            )
        }

        // console.log(Object.fromEntries(blob.headers.entries()))
        // const text = await blob.text()
        // console.log(text)
    },
    1000 * 100,
)
