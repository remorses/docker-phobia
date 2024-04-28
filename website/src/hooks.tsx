import {
    useState,
    useEffect,
    useLayoutEffect,
    use,
    createContext,
    useContext,
} from 'react'
import type { Dispatch, SetStateAction } from 'react'

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

const ViewTransitionsContext = createContext<
    Dispatch<SetStateAction<(() => void) | null>>
>(() => () => {})

export function ViewTransitions({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [finishViewTransition, setFinishViewTransition] = useState<
        null | (() => void)
    >(null)

    useEffect(() => {
        if (finishViewTransition) {
            finishViewTransition()
            setFinishViewTransition(null)
        }
    }, [finishViewTransition])

    return (
        <ViewTransitionsContext.Provider value={setFinishViewTransition}>
            {children}
        </ViewTransitionsContext.Provider>
    )
}

export function useSetFinishViewTransition() {
    return useContext(ViewTransitionsContext)
}

export function startViewTransition(fn: () => any) {
    if (!('startViewTransition' in document)) {
        fn()
    }
    // @ts-ignore
    return document.startViewTransition(fn)
}
