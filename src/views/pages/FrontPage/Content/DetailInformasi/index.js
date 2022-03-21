import CIcon from '@coreui/icons-react'
import React, { useContext, useEffect } from 'react'
import { cilCalendar, cilArrowLeft, cilUser } from '@coreui/icons'
import { BerandaImg2 } from 'src/assets'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from 'src/context/Provider'
import { getPenyakitBySlug } from 'src/context/actions/Penyakit'
import { useRouteMatch } from 'react-router-dom'
import { LoadingSkeletonPenyakit } from '../../Components'
import { format } from 'date-fns'
import { CLEAN_UP } from 'src/context/actionTypes'
import getImage from 'src/context/actions/Files/getImage'
import { CNavItem } from '@coreui/react'

const DetailInformasi = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { params } = match
  const { detailPenyakitState, detailPenyakitDispatch } = useContext(GlobalContext)
  const { data: penyakit, loading } = detailPenyakitState

  // Get penyakit by slug
  useEffect(() => {
    getPenyakitBySlug(params.slug, detailPenyakitDispatch)

    return () => {
      detailPenyakitDispatch({
        type: CLEAN_UP,
      })
    }
  }, [params, detailPenyakitDispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goBackToPrevPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  return (
    <div className="informasi">
      {/* Loading Skeleton appeared when data is loading */}
      {loading && <LoadingSkeletonPenyakit />}

      {!loading && (
        <div className="container">
          <a href="/informasi" className="prev-link" onClick={(e) => goBackToPrevPage(e)}>
            <CIcon icon={cilArrowLeft} className="me-2" />
            <span>Kembali ke halaman sebelumnya</span>
          </a>
          <div className="detail-informasi mt-3">
            <div className="detail-informasi-header">
              <h1>{penyakit.nm_penyakit}</h1>
              <div className="detail-informasi-sub-header d-flex gap-4">
                <div className="d-flex gap-2 align-items-center">
                  <CIcon icon={cilCalendar} />
                  <span>{penyakit && format(new Date(penyakit.waktu_buat), 'dd MMM y')}</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <CIcon icon={cilUser} />
                  <span>{penyakit.nm_pembuat}</span>
                </div>
              </div>
            </div>
            <div className="detail-informasi-body mt-3">
              <img
                src={getImage('foto_penyakit', penyakit.gambar)}
                alt="gambar-penyakit"
                className="gambar-penyakit mb-4"
              />
              <p>{penyakit.deskripsi}</p>

              <h3>Saran Pengobatan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, amet! Provident
                voluptas commodi facilis libero. Doloremque cupiditate sed neque ab delectus ipsam
                quam praesentium. Porro unde libero quam ex tempore!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailInformasi
