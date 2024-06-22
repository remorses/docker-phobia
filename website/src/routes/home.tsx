import type { MetaFunction } from '@remix-run/node'
import NavFramerComponent from '../framer/nav'
import HeroSearchFramerComponent from '../framer/hero-search'
import FooterFramerComponent from '../framer/footer'

export const meta: MetaFunction = () => {
    return [
        { title: 'Crispy Raycast' },
        {
            name: 'description',
            content: 'Manage Crisp conversations in Raycast',
        },
    ]
}

export default function Index() {
    return (
        <div className='flex flex-col grow min-h-full gap-[100px]  items-center'>
            <NavFramerComponent.Responsive
                variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                // className='!w-full'
            />
            <form action='' className='contents'>
                <HeroSearchFramerComponent
                    // variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                    className='!w-full'
                />
            </form>
            <div className="grow"></div>
            <FooterFramerComponent.Responsive
                variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                // className='!w-full'
            />
        </div>
    )
}
