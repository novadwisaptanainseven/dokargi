import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { BantuanIlustration } from 'src/assets'

const Banner = () => {
  return (
    <div className="banner-informasi">
      <div className="container">
        <CRow>
          <CCol md="6" className="d-none d-md-block">
            <img src={BantuanIlustration} alt="gambar ilustrasi" className="bantuan-ilustrasi" />
          </CCol>
          <CCol md="6" className="d-flex align-items-center ps-3 ps-md-5">
            <div className="banner-heading-informasi text-center text-md-start">
              <h1>
                BANTUAN <br />
                ALUR <span className="label-banner">APLIKASI</span>
              </h1>
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Banner
