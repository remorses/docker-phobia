import { redirect, type MetaFunction } from '@remix-run/node'
import Home from './home'

export const meta: MetaFunction = () => {
    return [
        { title: 'Docker Phobia' },
        {
            name: 'description',
            content: 'Visualize any Docker image file size',
        },
    ]
}

export function loader() {
    if (process.env.NODE_ENV === 'development') {
        return {}
    }
    return redirect('https://github.com/remorses/docker-phobia')
}

export default Home
