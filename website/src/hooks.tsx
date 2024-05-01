import {
    useEffect,
    useState
} from 'react'

export function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return size
}

export function useElemSize(ref) {
    const [size, setSize] = useState({
        width: ref.current?.clientWidth,
        height: ref.current?.clientHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: ref.current?.clientWidth,
                height: ref.current?.clientHeight,
            })
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return size
}
