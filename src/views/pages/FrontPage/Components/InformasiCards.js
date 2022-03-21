import { cilCalendar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardText, CCardTitle, CCardImage, CRow, CCol } from '@coreui/react'
import React, { useEffect, useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { GlobalContext } from 'src/context/Provider'
import { getPenyakit } from 'src/context/actions/Penyakit'
import LoadingSkeleton from './LoadingSkeleton'
import getImage from 'src/context/actions/Files/getImage'
import { format } from 'date-fns'
import { baseRoutePath } from 'src/helpers/url'

const InformasiCards = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { penyakitState, penyakitDispatch } = useContext(GlobalContext)
  const { data: dataPenyakit } = penyakitState

  // Get data penyakit
  useEffect(() => {
    getPenyakit(penyakitDispatch)
  }, [penyakitDispatch])

  const goToDetailPage = (e, slug) => {
    e.preventDefault()

    history.push(baseRoutePath + `informasi/${slug}`)
  }

  const goToInformasiPage = () => {
    history.push(baseRoutePath + 'informasi')
  }

  return (
    <div className="informasi">
      <h2 className="text-center mb-4">INFORMASI KARIES GIGI</h2>
      <div className="container">
        {/* Jika data penyakit belum ada, maka tampilkan loading skeleton */}
        {!dataPenyakit && <LoadingSkeleton count={3} />}

        {dataPenyakit && (
          <CRow>
            {dataPenyakit.map((item, idx) => (
              <CCol key={idx} md="4" className="mb-3">
                <CCard className="card border-0">
                  <CCardImage orientation="top" src={getImage('foto_penyakit', item.gambar)} />
                  <CCardBody className="p-4">
                    <div className="date d-flex gap-2">
                      <CIcon icon={cilCalendar} className="icon" />
                      <span className="text-secondary d-block">
                        {format(new Date(item.waktu_buat), 'dd MMM y')}
                      </span>
                    </div>
                    <CCardTitle className="mt-3 mb-3">{item.nm_penyakit}</CCardTitle>
                    <CCardText className="card-text">
                      {item.deskripsi.substring(0, 90)}{' '}
                      <a
                        href={`/informasi/${item.slug}`}
                        onClick={(e) => goToDetailPage(e, item.slug)}
                      >
                        ... Baca selengkapnya
                      </a>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        )}

        <div className="d-flex justify-content-center mt-4">
          <button className="button-lainnya" onClick={goToInformasiPage}>
            Lihat Lainnya
          </button>
        </div>
      </div>
    </div>
  )
}

export default InformasiCards
