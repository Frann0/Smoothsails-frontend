import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MainAppNavbar.scss'
const MainAppNavbar = () => {

    //TEST DATA TODO: REMOVE
    const [isAdmin, setIsAdmin] = React.useState(false)

    const [isOpened, setIsOpened] = React.useState(false)
    const RouteElements = [
        {
            path: '/app/projects',
            iconName: 'projects',
            routeName: 'Projects',
            requireAdmin: false,
        },
        {
            path: '/app/calendar',
            iconName: 'calendar',
            routeName: 'Calendar',
            requireAdmin: false,
        },
        {
            path: '/app/chat',
            iconName: 'chat',
            routeName: 'Chat',
            requireAdmin: false,
        },
        {
            path: '/app/team',
            iconName: 'team',
            routeName: 'Team Members',
            requireAdmin: false,
        },
        {
            path: '/app/adminPanel',
            iconName: 'adminPanel',
            routeName: 'Admin Panel',
            requireAdmin: true,
        },
    ]

    const FunctionalElements = [
        {
            iconName: 'toggleMenu',
            routeName: 'Toggle Menu',
            requireAdmin: false,
            onclick: () => { toggleMenu() }
        },
        {
            iconName: 'logout',
            routeName: 'Logout',
            requireAdmin: false,
            onclick: () => { }
        },
    ]



    const toggleMenu = () => {
        console.log('toggleMenu');
        
        setIsOpened(!isOpened)
    }

    const closeMenu = () => {
        setIsOpened(false)
    }

    const navigate = useNavigate();

    const handleRouteClick = (path: string) => {
        let s = RouteElements.find(route => route.path === path)
        if (s?.requireAdmin && !isAdmin) {
            return
        }

        navigate(path)
        closeMenu()
    }

    const canSeeRoute = (route: any) => {
        if (!isAdmin && route.requireAdmin) {
            return false
        }

        if (isAdmin && route.requireAdmin) {
            return true
        }

        if (!route.requireAdmin) {
            return true
        }

    }


    return (
        <div className='AppNavbar_Container'>
            <div className='AppNavbar_LogoContainer'>
                <img src="" alt="" />
            </div>
            <div className='AppNavbar_FunctionalityContainer'>
                {FunctionalElements.map((route, index) => (
                    <>
                        {canSeeRoute(route) &&
                            <div key={index} className='AppNavbar_FunctionalityElement' onClick={route.onclick}>
                                <div className='AppNavbar_IconContainer'>
                                    B
                                </div>
                                {isOpened &&
                                    <div className='AppNavbar_RouteNameContainer'>
                                        {route.routeName}
                                    </div>
                                }
                            </div>
                        }
                    </>
                ))}
            </div>

            <div className='AppNavbar_RouteElementContainer'>
                {RouteElements.map((route, index) => (
                    <>
                        {canSeeRoute(route) &&
                            <div key={index} className='AppNavbar_RouteElement' onClick={() => handleRouteClick(route.path)}>
                                <div className='AppNavbar_IconContainer'>
                                    A
                                </div>
                                {isOpened &&
                                    <div className='AppNavbar_RouteNameContainer'>
                                        {route.routeName}
                                    </div>
                                }
                            </div>
                        }
                    </>
                ))}
            </div>

            <div className='AppNavbar_FunctionalityContianer'>

            </div>

            <div className='AppNavbar_UserContainer'>
                <div className='AppNavbar_UserPic'>
                    <img src="" alt="" />
                </div>
                {isOpened &&
                    <div className='AppNavbar_UserInformationContainer'>
                        <p className='AppNavbar_FirstName'>
                            First Name
                        </p>
                        <p className='AppNavbar_LastName'>
                            Last Name
                        </p>
                    </div>
                }
            </div>
            <div className='AppNavbar_PromoContainer'>
                <div className='AppNavbar_PromoIcon'>
                    <img src="" alt="" />
                </div>
                {isOpened &&
                    <div className='AppNavbar_PromoText'>
                        <p className='AppNavbar_PromoPowered'> Powered by </p>
                        <p className='AppNavbar_PromoName'> <b>Smooth Sails</b> </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default MainAppNavbar