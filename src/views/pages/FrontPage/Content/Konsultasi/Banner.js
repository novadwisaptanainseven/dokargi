import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { KonsultasiIlustration } from 'src/assets'

const Banner = () => {
  return (
    <div className="banner-informasi">
      <div className="container">
        <CRow>
          <CCol md="5" className="d-none d-md-block">
            <img
              src={KonsultasiIlustration}
              alt="gambar ilustrasi"
              className="konsultasi-ilustrasi"
            />
          </CCol>
          <CCol md="7" className="d-flex align-items-center ps-0 ps-md-5">
            <div className="banner-heading-informasi text-center text-md-start">
              <h1>
                KONSULTASI <br />
                <span className="label-banner">KELUHAN</span> DAN{' '}
                <span className="label-banner">GEJALA</span>
              </h1>
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Banner
