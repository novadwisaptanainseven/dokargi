import CIcon from '@coreui/icons-react'
import { CCard, CCol, CRow, CCardBody, CCardTitle, CCardImage, CCardText } from '@coreui/react'
import { cilCog, cilMobile, cilUser, cilCalendar } from '@coreui/icons'
import React, { useContext } from 'react'
import { BerandaImg, BerandaImg2 } from 'src/assets'
import Banner from './Banner'
import { InformasiCards } from '../../Components'
import { GlobalContext } from 'src/context/Provider'
import { LoadingScreen } from '../../Components'

const Beranda = () => {
  const { kontenState } = useContext(GlobalContext)
  const { data: dataKonten } = kontenState

  return (
    <div className="container-beranda">
      {/* Loading Screen */}
      {!dataKonten && <LoadingScreen />}

      {dataKonten && (
        <>
          {/* Banner */}
          <Banner dataKonten={dataKonten} />

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
                      Aplikasi sistem pakar ini dapat menyesuaikan ukuran layar perangkat Anda baik
                      di desktop maupun mobile
                    </p>
                  </div>
                </CCol>
                <CCol md="4" className="mb-3">
                  <div className="pelayanan">
                    <CIcon icon={cilCog} size="4xl" />
                    <h4 className="my-3">Certainty Vector</h4>
                    <p className="m-0">
                      Aplikasi sistem pakar ini menggunakan metode Certainty Vector untuk
                      mendiagnosa karies gigi
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
                    Bingung <span className="label-tentang">Diagnosa</span> Gigi Anda ? <br />{' '}
                    Tenang Kami <span className="label-tentang">Solusinya</span>
                  </h2>
                  <p>{dataKonten.tentang_kami}</p>
                </CCol>
              </CRow>
            </div>

            {/* Informasi Karies Gigi */}
            <InformasiCards />
          </div>
        </>
      )}
    </div>
  )
}

export default Beranda
