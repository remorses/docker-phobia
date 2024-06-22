import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node'
import NavFramerComponent from '../framer/nav'
import HeroSearchFramerComponent from '../framer/hero-search'
import FooterFramerComponent from '../framer/footer'
import { Form, useNavigation } from '@remix-run/react'
import { sleep } from '../lib/utils'

export const meta: MetaFunction = () => {
    return [
        { title: 'Crispy Raycast' },
        {
            name: 'description',
            content: 'Manage Crisp conversations in Raycast',
        },
    ]
}

export async function action({ request }: ActionFunctionArgs) {
    console.log(await request.formData())
    await sleep(1000)
    return { title: 'Crispy Raycast' }
}

export default function Index() {
    const nav = useNavigation()
    const isSearching = nav.formData && nav.state === 'submitting'
    return (
        <div className='flex flex-col grow min-h-full gap-[100px]  items-center'>
            <NavFramerComponent.Responsive
                variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                className=''
            />
            <Form method='POST' className='contents'>
                <HeroSearchFramerComponent
                    buttonVariant={isSearching ? 'Loading' : 'Default'}
                    inputName='query'
                    // variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                    className='!w-full'
                />
            </Form>
            <div className='grow'></div>
            <FooterFramerComponent.Responsive
                variants={{ base: 'Mobile', md: 'Tablet', lg: 'Desktop' }}
                // className='!w-full'
            />
        </div>
    )
}
