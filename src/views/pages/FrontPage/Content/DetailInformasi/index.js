import CIcon from '@coreui/icons-react'
import React, { useEffect } from 'react'
import { cilCalendar, cilArrowLeft, cilUser } from '@coreui/icons'
import { BerandaImg2 } from 'src/assets'
import { useHistory } from 'react-router-dom'

const DetailInformasi = () => {
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goBackToPrevPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  return (
    <div className="informasi">
      <div className="container">
        <a href="/informasi" className="prev-link" onClick={(e) => goBackToPrevPage(e)}>
          <CIcon icon={cilArrowLeft} className="me-2" />
          <span>Kembali ke halaman sebelumnya</span>
        </a>
        <div className="detail-informasi mt-3">
          <div className="detail-informasi-header">
            <h1>Karies Superficialis</h1>
            <div className="detail-informasi-sub-header d-flex gap-4">
              <div className="d-flex gap-2 align-items-center">
                <CIcon icon={cilCalendar} />
                <span>11 Feb 2022</span>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <CIcon icon={cilUser} />
                <span>Admin</span>
              </div>
            </div>
          </div>
          <div className="detail-informasi-body mt-3">
            <img src={BerandaImg2} alt="gambar-penyakit" className="gambar-penyakit mb-4" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nisi expedita
              aliquid repudiandae rerum esse maxime minima harum a. Doloribus recusandae deserunt
              ullam incidunt, mollitia, natus sed corporis unde tempora libero beatae consequatur
              consectetur ad temporibus earum similique nulla tenetur quis, officiis quo aliquid.
              Possimus dolores velit enim nesciunt molestiae est quas et placeat. Officia explicabo,
              distinctio illum eum neque ab ullam quibusdam reprehenderit eos molestias mollitia,
              odit magnam! Aspernatur nisi ad tenetur? Porro soluta sequi delectus facere ducimus
              reprehenderit accusamus, a expedita alias. Magnam odit, voluptatibus saepe,
              dignissimos sunt beatae dolorum, autem repellat cupiditate tempora inventore rem
              itaque ab.
            </p>

            <h3>Saran Pengobatan</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, amet! Provident voluptas
              commodi facilis libero. Doloremque cupiditate sed neque ab delectus ipsam quam
              praesentium. Porro unde libero quam ex tempore!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailInformasi
