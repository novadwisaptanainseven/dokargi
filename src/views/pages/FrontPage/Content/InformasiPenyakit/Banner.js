import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { BerandaBanner, InformasiIlustration } from 'src/assets'

const Banner = () => {
  return (
    <div className="banner-informasi">
      <div className="container">
        <CRow>
          <CCol md="5" className="d-none d-md-block">
            <img
              src={InformasiIlustration}
              alt="gambar ilustrasi"
              className="informasi-ilustrasi"
            />
          </CCol>
          <CCol md="7" className="d-flex align-items-center ps-0 ps-md-5">
            <div className="banner-heading-informasi text-center text-md-start">
              <h1>
                INFORMASI PENYAKIT <br />
                <span className="label-banner">KARIES GIGI</span>
              </h1>
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Banner
