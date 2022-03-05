import React from 'react'

const Beranda = React.lazy(() => import('./views/pages/FrontPage/Content/Beranda'))
const Konsultasi = React.lazy(() => import('./views/pages/FrontPage/Content/Konsultasi'))

const routesFront = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda,
    exact: true,
  },
  {
    path: '/beranda',
    name: 'Beranda',
    component: Beranda,
    exact: true,
  },
  {
    path: '/konsultasi',
    name: 'Konsultasi',
    component: Konsultasi,
    exact: true,
  },
]

export default routesFront
