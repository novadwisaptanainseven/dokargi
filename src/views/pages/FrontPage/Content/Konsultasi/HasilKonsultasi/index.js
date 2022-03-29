import { cilArrowLeft, cilPrint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CTable,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableBody,
  CCardTitle,
  CCol,
  CCardText,
  CCardBody,
  CCard,
  CCardHeader,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { SampleGambar } from 'src/assets'
import Banner from '../Banner'
import { getDiagnosaById } from 'src/context/actions/Diagnosa'
import { LoadingSkeletonHasilDiagnosa } from '../../../Components'
import getImage from 'src/context/actions/Files/getImage'

const HasilKonsultasi = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { params } = match
  const [diagnosa, setDiagnosa] = useState('')

  // Get hasil diagnosa by id pasien
  useEffect(() => {
    getDiagnosaById(params.id, setDiagnosa, history)
  }, [params])

  useEffect(() => {
    window.scrollTo(0, 600)
  }, [])

  const goBackToPrevPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const dataGejala = !diagnosa ? [] : diagnosa.data_gejala

  const dataSolusi = !diagnosa ? [] : diagnosa.data_saran_pengobatan

  const dataPenyakitLain = !diagnosa ? [] : diagnosa.hasil_diagnosa_penyakit_lain

  const dataHasilPakar = !diagnosa ? '' : diagnosa.hasil_pakar

  return (
    <div className="container-hasil-konsultasi pb-5">
      {/* Banner  */}
      <Banner />

      {/* Body Content */}
      <div className="content-hasil-konsultasi mt-5">
        {/* Loading Skeleton */}
        {!diagnosa && <LoadingSkeletonHasilDiagnosa />}
        <div className="container">
          <a href="/informasi" className="prev-link" onClick={(e) => goBackToPrevPage(e)}>
            <CIcon icon={cilArrowLeft} className="me-2" />
            <span>Kembali ke halaman sebelumnya</span>
          </a>
          <div className="aksi-cari mt-4 d-flex justify-content-between">
            <h3>Hasil Diagnosa</h3>
            <button className="btn btn-cari">
              <CIcon icon={cilPrint} />
              <span className="ms-2">Cetak</span>
            </button>
          </div>

          {/* Gejala */}
          {diagnosa && (
            <>
              <div className="mt-4 mb-5">
                <CTable responsive="sm" striped borderless>
                  <CTableHead
                    style={{
                      backgroundColor: '#16b0c8',
                    }}
                  >
                    <CTableRow>
                      <CTableHeaderCell scope="col" className="text-white">
                        #
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Kode
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Gejala yang Dialami
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Kondisi
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataGejala.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.id_gejala}</CTableDataCell>
                        <CTableDataCell>{item.nm_gejala}</CTableDataCell>
                        <CTableDataCell>{item.nm_kondisi}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>

              {/* Diagnosa Penyakit */}
              <CCard className={`mb-4 dokargi-bordercolor-main`}>
                <CCardHeader className="dokargi-bgcolor-main text-white">
                  <h5 className="mb-0">Diagnosa Penyakit</h5>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol md="5" className="mb-3">
                      <img
                        src={getImage('foto_penyakit', dataHasilPakar.gambar)}
                        alt={'gambar-penyakit'}
                        className="w-100"
                      />
                    </CCol>
                    <CCol>
                      <CCardTitle>
                        {dataHasilPakar.nm_penyakit} / CF ({dataHasilPakar.nilai_cf * 100} %)
                      </CCardTitle>
                      <CCardText style={{ textAlign: 'justify' }}>
                        {dataHasilPakar.deskripsi}
                      </CCardText>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>

              {/* Saran Pengobatan */}
              <CCard className={`mb-4 dokargi-bordercolor-warning`}>
                <CCardHeader className="dokargi-bgcolor-warning border-0">
                  <h5 className="mb-0">Saran Pengobatan</h5>
                </CCardHeader>
                <CCardBody>
                  <ul className="m-0">
                    {dataSolusi.map((item, idx) => (
                      <li key={idx}>{item.solusi}</li>
                    ))}
                  </ul>
                </CCardBody>
              </CCard>

              {/* Penyakit Lain */}
              <CCard className={`mb-4 dokargi-bordercolor-dark`}>
                <CCardHeader className="dokargi-bgcolor-dark text-white border-0">
                  <h5 className="mb-0">Kemungkinan Penyakit Lain</h5>
                </CCardHeader>
                <CCardBody>
                  <ul className="m-0">
                    {dataPenyakitLain.map((item, idx) => (
                      <li key={idx}>
                        {item.nm_penyakit} ({item.nilai_cf} / {item.nilai_cf * 100} %)
                      </li>
                    ))}
                  </ul>
                </CCardBody>
              </CCard>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HasilKonsultasi
