import React from 'react'
import { SampleGambar } from 'src/assets'

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="container d-flex justify-content-between">
        <div className="logo-brand d-flex align-items-center gap-2">
          <img src={SampleGambar} alt="logo" width={50} />
          <h4 className="mb-0">DOKARGI</h4>
        </div>
        <div className="list-nav d-flex justify-content-between">
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
      </div>
    </div>
  )
}

export default NavigationBar
