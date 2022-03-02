import { CRow, CCol } from '@coreui/react'
import React from 'react'
import { SampleGambar } from 'src/assets'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-5">
        <CRow>
          <CCol md="3">
            <div className="logo-brand d-flex align-items-center gap-2 mb-3">
              <img src={SampleGambar} alt="logo" width={50} />
              <h4 className="mb-0">DOKARGI</h4>
            </div>
            <p>
              DORISGI merupakan aplikasi yang bertujuan untuk membantu memberikan penjelasan
              mengenai karies gigi yang pasien alami dan memberitahukan solusi untuk mengatasinya
            </p>
          </CCol>
          <CCol md="3">
            <div className="footer-sub-title mb-3">
              <h4 className="mb-0">Link Terkait</h4>
            </div>
            <ul className="link-nav-footer">
              <li>
                <a href="#" className="text-decoration-none">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Konsultasi
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Informasi Penyakit
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Bantuan
                </a>
              </li>
            </ul>
          </CCol>
          <CCol md="3">
            <div className="footer-sub-title mb-3">
              <h4 className="mb-0">Pembuat Skripsi</h4>
            </div>
            <p>
              Persembahan dari Windasari sebagai mahasiswa dari kampus Universitas Mulawarman
              Jurusan Ilmu Komputer.
            </p>
            <ul className="link-nav-footer">
              <li>
                <a href="#" className="text-decoration-none">
                  0812344566
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  @instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  email@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  @twitter
                </a>
              </li>
            </ul>
          </CCol>
          <CCol md="3">
            <div className="footer-sub-title mb-3">
              <h4 className="mb-0">Alamat Kampus</h4>
            </div>
            <p>Jl. Kuaro, Gn. Kelua, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75119</p>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Footer
