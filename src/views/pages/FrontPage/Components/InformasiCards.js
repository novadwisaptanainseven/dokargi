import { cilCalendar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardText, CCardTitle, CCardImage, CRow, CCol } from '@coreui/react'
import React, { useEffect } from 'react'
import { BerandaImg2 } from 'src/assets'
import { useHistory, useRouteMatch } from 'react-router-dom'

const InformasiCards = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match

  const goToDetailPage = (e, slug) => {
    e.preventDefault()

    history.push(url + `/${slug}`)
  }

  return (
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
                  repudiandae accusantium temporibus quam?{' '}
                  <a
                    href={`/informasi/slug-penyakit`}
                    onClick={(e) => goToDetailPage(e, 'slug-penyakit')}
                  >
                    ... Baca selengkapnya
                  </a>
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
                  repudiandae accusantium temporibus quam?{' '}
                  <a
                    href={`/informasi/slug-penyakit`}
                    onClick={(e) => goToDetailPage(e, 'slug-penyakit')}
                  >
                    ... Baca selengkapnya
                  </a>
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
                  repudiandae accusantium temporibus quam?{' '}
                  <a
                    href={`/informasi/slug-penyakit`}
                    onClick={(e) => goToDetailPage(e, 'slug-penyakit')}
                  >
                    ... Baca selengkapnya
                  </a>
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
  )
}

export default InformasiCards
