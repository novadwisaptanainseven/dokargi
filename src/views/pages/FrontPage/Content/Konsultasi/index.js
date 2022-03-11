import React from 'react'
import Banner from './Banner'

const Konsultasi = () => {
  return (
    <div className="container-konsultasi">
      {/* Banner */}
      <Banner />

      {/* Body Content */}
      <div className="content-konsultasi mt-5">
        <div className="container">
          <div className="alert-dokargi mb-3">
            Silahkan mencari nama pasien apabila sudah pernah daftar sebelum memilih gejala. Jika
            belum, daftar terlebih dahulu. Lebih jelasnya, silahkan baca panduan di menu bantuan
            untuk mengetahui alur konsultasi
          </div>

          <h4>Cari Pasien</h4>
          <div className="aksi-cari">
            <input type="text" name="keyword-cari" />
            <button className="btn">Cari</button>
            <button className="btn">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Konsultasi
