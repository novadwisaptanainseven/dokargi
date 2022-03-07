import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCol,
  CRow,
  CCardBody,
  CCardTitle,
  CCardImage,
  CCardText,
  CButton,
} from '@coreui/react'
import { cilCog, cilMobile, cilUser, cilCalendar } from '@coreui/icons'
import React from 'react'
import { BerandaBanner, BerandaImg, BerandaImg2, SampleGambar } from 'src/assets'

const Beranda = () => {
  return (
    <div className="container-beranda">
      {/* Banner */}
      <div className="banner-beranda">
        <div className="container">
          <div className="banner-beranda-heading">
            <h3>Kamu Punya Masalah Karies Gigi ?</h3>
            <h1>
              Konsultasikan ke <span className="label-banner">DOKARGI</span>
            </h1>
            <p className="mt-4">
              DOKARGI merupakan aplikasi yang bertujuan untuk membantu memberikan penjelasan
              mengenai karies gigi yang pasien alami dan memberitahukan solusi untuk mengatasinya
            </p>
            <button type="button" className="btn btn-banner">
              MULAI KONSULTASI
            </button>
          </div>
          <img src={BerandaBanner} alt="beranda-banner" className="beranda-banner-main" />
        </div>
      </div>

      {/* Body Content */}
      <div className="content-beranda">
        <div className="container">
          {/* Pelayanan */}
          <CRow>
            <CCol md="4" className="mb-3">
              <div className="pelayanan">
                <CIcon icon={cilMobile} size="4xl" />
                <h4 className="my-3">Aplikasi Responsif</h4>
                <p className="m-0">
                  Aplikasi sistem pakar ini dapat menyesuaikan ukuran layar perangkat Anda baik di
                  desktop maupun mobile
                </p>
              </div>
            </CCol>
            <CCol md="4" className="mb-3">
              <div className="pelayanan">
                <CIcon icon={cilCog} size="4xl" />
                <h4 className="my-3">Certainty Vector</h4>
                <p className="m-0">
                  Aplikasi sistem pakar ini menggunakan metode Certainty Vector untuk mendiagnosa
                  karies gigi
                </p>
              </div>
            </CCol>
            <CCol md="4" className="mb-3">
              <div className="pelayanan">
                <CIcon icon={cilUser} size="4xl" />
                <h4 className="my-3">Admin Pakar</h4>
                <p className="m-0">
                  Terdapat fitur admin pakar untuk mengatur pengetahuan dan CF pakar
                </p>
              </div>
            </CCol>
          </CRow>

          {/* Tentang */}
          <CRow className="mt-5 tentang pb-3 pb-md-0">
            <CCol className="d-none d-md-block">
              <img src={BerandaImg} width="500" alt="beranda-img" />
            </CCol>
            <CCol>
              <h2 className="mb-4">
                Bingung <span className="label-tentang">Diagnosa</span> Gigi Anda ? <br /> Tenang
                Kami <span className="label-tentang">Solusinya</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the
              </p>
            </CCol>
          </CRow>
        </div>

        {/* Informasi Karies Gigi */}
        <div className="informasi">
          <h2 className="text-center mb-4">INFORMASI KARIES GIGI</h2>
          <div className="container">
            <CRow>
              <CCol md="4" className="mb-3">
                <CCard className="card border-0">
                  <CCardImage orientation="top" src={BerandaImg2} />
                  <CCardBody className="p-4">
                    <div className="date d-flex gap-2">
                      <CIcon icon={cilCalendar} className="icon" />
                      <span className="text-secondary d-block">11 Feb 2022</span>
                    </div>
                    <CCardTitle className="mt-3 mb-3">Karies Superficialis</CCardTitle>
                    <CCardText className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perferendis
                      repudiandae accusantium temporibus quam? <a href="#">... Baca selengkapnya</a>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol md="4" className="mb-3">
                <CCard className="card border-0">
                  <CCardImage orientation="top" src={BerandaImg2} />
                  <CCardBody className="p-4">
                    <div className="date d-flex gap-2">
                      <CIcon icon={cilCalendar} className="icon" />
                      <span className="text-secondary d-block">11 Feb 2022</span>
                    </div>
                    <CCardTitle className="mt-3 mb-3">Karies Superficialis</CCardTitle>
                    <CCardText className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perferendis
                      repudiandae accusantium temporibus quam? <a href="#">... Baca selengkapnya</a>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol md="4" className="mb-3">
                <CCard className="card border-0">
                  <CCardImage orientation="top" src={BerandaImg2} />
                  <CCardBody className="p-4">
                    <div className="date d-flex gap-2">
                      <CIcon icon={cilCalendar} className="icon" />
                      <span className="text-secondary d-block">11 Feb 2022</span>
                    </div>
                    <CCardTitle className="mt-3 mb-3">Karies Superficialis</CCardTitle>
                    <CCardText className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perferendis
                      repudiandae accusantium temporibus quam? <a href="#">... Baca selengkapnya</a>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

            <div className="d-flex justify-content-center mt-4">
              <button className="button-lainnya">Lihat Lainnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beranda
