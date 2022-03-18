import React from 'react'
import { BerandaBanner } from 'src/assets'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { baseRoutePath } from 'src/helpers/url'

const Banner = ({ dataKonten }) => {
  const history = useHistory()

  const goToKonsultasiPage = () => {
    history.push(baseRoutePath + 'konsultasi')
  }

  return (
    <>
      <div className="banner-beranda">
        <div className="container">
          <div className="banner-beranda-heading">
            <h3>Kamu Punya Masalah Karies Gigi ?</h3>
            <h1>
              Konsultasikan ke{' '}
              <span className="label-banner">
                {dataKonten ? dataKonten.title_website.toUpperCase() : 'DOKARGI'}
              </span>
            </h1>
            <p className="mt-4">
              DOKARGI merupakan aplikasi yang bertujuan untuk membantu memberikan penjelasan
              mengenai karies gigi yang pasien alami dan memberitahukan solusi untuk mengatasinya
            </p>
            <button type="button" className="btn btn-banner" onClick={goToKonsultasiPage}>
              MULAI KONSULTASI
            </button>
          </div>
          <img src={BerandaBanner} alt="beranda-banner" className="beranda-banner-main" />
        </div>
      </div>
    </>
  )
}

export default Banner

Banner.propTypes = {
  dataKonten: PropTypes.object,
}
