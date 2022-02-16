import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilBriefcase, cilCog, cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const rootPath = '/admin'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: rootPath + '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Data Master',
  // },

  {
    component: CNavGroup,
    name: 'Data Master',
    to: rootPath + '/data-master',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Penyakit',
        to: rootPath + '/data-master/penyakit',
      },
      {
        component: CNavItem,
        name: 'Gejala',
        to: rootPath + '/data-master/gejala',
      },
      {
        component: CNavItem,
        name: 'Pasien',
        to: rootPath + '/data-master/pasien',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Data Bobot',
    to: rootPath + '/bobot',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Riwayat Konsultasi',
    to: rootPath + '/riwayat-konsultasi',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: rootPath + '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pengaturan',
    to: rootPath + '/pengaturan',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
]

export default _nav
