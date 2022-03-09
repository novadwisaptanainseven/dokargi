import React from 'react'
import { InformasiCards } from '../../Components'
import Banner from './Banner'

const InformasiPenyakit = () => {
  return (
    <div className="container-informasi">
      {/* Banner */}
      <Banner />

      {/* Body Content */}
      <div className="content-informasi">
        <InformasiCards />
      </div>
    </div>
  )
}

export default InformasiPenyakit
