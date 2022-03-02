import React, { useState } from 'react'
import { SampleGambar } from 'src/assets'

const NavigationBar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false)

  const handleOpenNavMenu = () => {
    const mobileMenuNav = document.querySelector('.mobile-nav-menu')
    console.log(mobileMenuNav)
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

  return (
    <div className="navigation-bar">
      <div className="container d-flex justify-content-between">
        <div className="logo-brand d-flex align-items-center gap-2">
          <img src={SampleGambar} alt="logo" width={50} />
          <h4 className="mb-0">DOKARGI</h4>
        </div>
        {/* Desktop */}
        <div className="list-nav d-none d-md-flex justify-content-between">
          <div className="list-nav-item1">
            <a href="#" className="list-nav-link">
              Beranda
            </a>
            <div className="line nav-line1"></div>
          </div>
          <div className="list-nav-item2">
            <a href="#" className="list-nav-link">
              Diagnosa
            </a>
            <div className="line nav-line2"></div>
          </div>
          <div className="list-nav-item3">
            <a href="#" className="list-nav-link">
              Informasi
            </a>
            <div className="line nav-line3"></div>
          </div>
          <div className="list-nav-item4">
            <a href="#" className="list-nav-link">
              Tentang
            </a>
            <div className="line nav-line4"></div>
          </div>
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
          <div className="list-nav-item1 mb-3">
            <a href="#" className="list-nav-link">
              Beranda
            </a>
            <div className="line nav-line1"></div>
          </div>
          <div className="list-nav-item2 mb-3">
            <a href="#" className="list-nav-link">
              Diagnosa
            </a>
            <div className="line nav-line2"></div>
          </div>
          <div className="list-nav-item3 mb-3">
            <a href="#" className="list-nav-link">
              Informasi
            </a>
            <div className="line nav-line3"></div>
          </div>
          <div className="list-nav-item4 mb-3">
            <a href="#" className="list-nav-link">
              Tentang
            </a>
            <div className="line nav-line4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
