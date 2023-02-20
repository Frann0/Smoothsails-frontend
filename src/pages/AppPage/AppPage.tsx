import React from 'react'
import MainAppNavbar from '../../components/shared/navbars/mainAppNavbars/MainAppNavbar'
import { RouteInterface } from '../../models/sharedInterfaces'
import './AppPage.scss'

const AppPage = () => {

    const subRoutes = [
        {
            path: '/app',
            element: <div>App</div>,
        },
        {
            path: '/app/chat',
            element: <div>Chat</div>,
        },
        {
            path: '/app/contacts',
            element: <div>Contacts</div>,
        },
        {
            path: '/app/settings',
            element: <div>Settings</div>,
        },
    ] as RouteInterface[]

    const [activeRoute, setActiveRoute] = React.useState('')
    const [activeElement, setActiveElement] = React.useState<JSX.Element>()
    React.useEffect(() => {
        const currentPath = window.location.pathname
        setActiveRoute(currentPath)
    }, [])

    const getElement = (path: string) => {
        const element = subRoutes.find(route => route.path === path)
        return element?.element
    }

    React.useEffect(() => {
        const element = getElement(activeRoute)
        setActiveElement(element)
    }, [activeRoute])






    return (
        <div className='WebApp_Container'>
            <MainAppNavbar />
            <div className='WebApp_Content'>
                {activeElement}
            </div>
        </div>
    )
}

export default AppPage