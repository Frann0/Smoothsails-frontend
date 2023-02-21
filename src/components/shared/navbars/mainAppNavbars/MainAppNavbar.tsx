import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../icon/Icon'
import logo from '../../../../assets/shared/logo.svg'
import logo_long from '../../../../assets/shared/logo_long.svg'
import './MainAppNavbar.scss'
const MainAppNavbar = () => {

    //TEST DATA TODO: REMOVE
    const [isAdmin, setIsAdmin] = React.useState(true)

    const [isOpened, setIsOpened] = React.useState(false)
    const [logoState, setLogo] = React.useState('')

    React.useEffect(() => {
        setLogo(isOpened ? logo_long : logo)
    }, [isOpened])


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
            iconName: 'search',
            routeName: 'Global Search',
            requireAdmin: false,
            onclick: () => { }

        },
        {
            iconName: 'logout',
            routeName: 'Logout',
            requireAdmin: false,
            onclick: () => { }
        },
        {
            iconName: 'notification-none',
            routeName: 'Notifications',
            requireAdmin: false,
            onclick: () => { }

        }
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
        <div className={`AppNavbar_Container ${isOpened ? 'opened' : 'closed'}`}>
            <div className='AppNavbar_LogoContainer'>
                <a href='/app'>
                    <img src={logoState} alt="" />
                </a>
            </div>
            <div className='AppNavbar_FunctionalityContainer'>
                {FunctionalElements.slice(0, 2).map((route, index) => (
                    <>
                        {canSeeRoute(route) &&
                            <div key={index} className='AppNavbar_FunctionalityElement' onClick={route.onclick}>
                                <div className='AppNavbar_IconContainer'>
                                    {route.iconName === 'toggleMenu' ?
                                        <>
                                            {isOpened && <Icon name='panel_close' />}
                                            {!isOpened && <Icon name='panel_open' />}
                                        </>
                                        : <Icon name={route.iconName} />
                                    }
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
                                <div className={`AppNavbar_IconContainer`}>
                                    <Icon name={route.iconName} />
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

            <div className='AppNavbar_FunctionalityContainer'>
                {FunctionalElements.slice(2).map((route, index) => (
                    <>
                        {canSeeRoute(route) &&
                            <div key={index} className='AppNavbar_FunctionalityElement' onClick={route.onclick}>
                                <div className='AppNavbar_IconContainer'>
                                    {route.iconName === 'toggleMenu' ?
                                        <>
                                            {isOpened && <Icon name='panel_close' />}
                                            {!isOpened && <Icon name='panel_open' />}
                                        </>
                                        : <Icon name={route.iconName} />
                                    }
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

            <div className='AppNavbar_UserContainer'>
                <div className='AppNavbar_UserElement'>
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
            </div>
            <div className='AppNavbar_PromoContainer'>
                <div className='AppNavbar_PromoElement'>
                    <div className='AppNavbar_PromoIcon'>
                        <img src={logo} alt="" />
                    </div>
                    {isOpened &&
                        <div className='AppNavbar_PromoText'>
                            <p className='AppNavbar_PromoPowered'> Powered by </p>
                            <p className='AppNavbar_PromoName'> <b>Smooth Sails</b> </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainAppNavbar