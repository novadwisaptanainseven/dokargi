import React, { useState, useEffect } from 'react'
import { SampleGambar } from 'src/assets'
import { Link, useLocation } from 'react-router-dom'
import { disableScroll, enableScroll } from 'src/helpers/functions'
import PropTypes from 'prop-types'
import getImage from 'src/context/actions/Files/getImage'
import { baseRoutePath } from 'src/helpers/url'

const NavigationBar = ({ dataKonten }) => {
  const [openNavMenu, setOpenNavMenu] = useState(false)
  const location = useLocation()
  const { pathname } = location

  // Menu Navigasi
  const navMenu = [
    {
      name: 'Beranda',
      path: 'beranda',
    },
    {
      name: 'Konsultasi',
      path: 'konsultasi',
    },
    {
      name: 'Informasi Penyakit',
      path: 'informasi',
    },
    {
      name: 'Bantuan',
      path: 'bantuan',
    },
  ]

  const handleMenuActive = (pathNav) => {
    if (pathNav === pathname) {
      return 'active'
    }
  }

  const handleOpenNavMenu = () => {
    const mobileMenuNav = document.querySelector('.mobile-nav-menu')
    mobileMenuNav.style.display = 'block'

    setTimeout(() => {
      setOpenNavMenu(!openNavMenu)
    }, 100)

    setTimeout(() => {
      if (openNavMenu) {
        mobileMenuNav.style.display = 'none'
      }
    }, 600)
  }

  useEffect(() => {
    if (openNavMenu) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [openNavMenu])

  // Handle close nav menu when link clicked
  const closeNavMenu = () => {
    setOpenNavMenu(false)
  }

  return (
    <div className="navigation-bar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-brand d-flex align-items-center gap-2">
          <img src={dataKonten ? getImage('', dataKonten.logo) : ''} alt="logo" width={50} />
          <h4 className="mb-0">{dataKonten && dataKonten.title_website.toUpperCase()}</h4>
        </div>
        {/* Desktop */}
        <div className="list-nav d-none d-md-flex justify-content-between">
          {navMenu.map((menu, idx) => (
            <div key={idx} className={`list-nav-item${idx + 1}`}>
              <Link
                to={baseRoutePath + menu.path}
                className={`list-nav-link ${handleMenuActive(menu.path)}`}
              >
                {menu.name}
              </Link>
              <div className={`line nav-line${idx + 1} ${handleMenuActive(menu.path)}`}></div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <button type="button" className="d-md-none mobile-list-nav" onClick={handleOpenNavMenu}>
          <div className={`hamburger-menu ${openNavMenu && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`mobile-nav-menu text-center ${openNavMenu && 'active'}`}>
          {navMenu.map((menu, idx) => (
            <div key={idx} className={`list-nav-item${idx + 1} mb-3`}>
              <Link
                to={baseRoutePath + menu.path}
                className={`list-nav-link ${handleMenuActive(menu.path)}`}
                onClick={closeNavMenu}
              >
                {menu.name}
              </Link>
              <div className={`line nav-line${idx + 1} ${handleMenuActive(menu.path)}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar

NavigationBar.propTypes = {
  dataKonten: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
