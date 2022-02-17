import React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const pathname2 = pathname.split('/')
    let pathId = ''

    if (pathname2.length > 5) {
      pathId = '/:id'
      pathname2.splice(pathname2.length - 1, 1)
    }

    const pathname3 = pathname2.join('/')
    // console.log(pathname3 + pathId)

    if (pathname2.length < 6) {
      const currentRoute = routes.find((route) => {
        return '/admin' + route.path === pathname3 + pathId
      })
      return currentRoute?.name || 'Home'
    }
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []

    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`

      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, routes),
        active: index + 1 === array.length ? true : false,
      })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      {/* <CBreadcrumbItem href="/">Home</CBreadcrumbItem> */}
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
