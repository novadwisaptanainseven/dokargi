import React from 'react'
import { BerandaBanner } from 'src/assets'

const Banner = () => {
  return (
    <div className="banner-beranda">
      <div className="container">
        <div className="banner-beranda-heading">
          <h3>Kamu Punya Masalah Karies Gigi ?</h3>
          <h1>
            Konsultasikan ke <span className="label-banner">DOKARGI</span>
          </h1>
          <p className="mt-4">
            DOKARGI merupakan aplikasi yang bertujuan untuk membantu memberikan penjelasan mengenai
            karies gigi yang pasien alami dan memberitahukan solusi untuk mengatasinya
          </p>
          <button type="button" className="btn btn-banner">
            MULAI KONSULTASI
          </button>
        </div>
        <img src={BerandaBanner} alt="beranda-banner" className="beranda-banner-main" />
      </div>
    </div>
  )
}

export default Banner
