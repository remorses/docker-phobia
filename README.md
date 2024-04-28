<div align='center'>
    <br/>
    <br/>
    <h3>docker-phobia</h3>
    <p>analyze Docker images and make them slim</p>
    <br/>
    <br/>
</div>

## Install

You can install docker-phobia on your path with:

```bash
curl -sf http://goblin.run/github.com/remorses/docker-phobia | sh
```

## Usage

```bash
docker-phobia
# Use the arrow keys to navigate: ↓ ↑ → ←
# ? Select a Docker image:
#   ▸ node:18-slim
#     postgres:latest

# or pass the image tag as an argument
docker-phobia node:18-slim
```

## Example Output

![example treemap](./website/public/example-docker-phobia.png)
