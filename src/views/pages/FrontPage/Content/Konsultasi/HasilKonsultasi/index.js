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
import React, { useEffect, useState, useRef } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { SampleGambar } from 'src/assets'
import Banner from '../Banner'
import { getDiagnosaById } from 'src/context/actions/Diagnosa'
import { ComponentToPrint, LoadingComponent } from 'src/components'
import { LoadingSkeletonHasilDiagnosa } from '../../../Components'
import getImage from 'src/context/actions/Files/getImage'
import { format } from 'date-fns'
import { useReactToPrint } from 'react-to-print'

const HasilKonsultasi = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { params } = match
  const [diagnosa, setDiagnosa] = useState('')
  const componentPrintRef = useRef()

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

  const dataPasien = !diagnosa ? [] : diagnosa.data_pasien

  const dataGejala = !diagnosa ? [] : diagnosa.data_gejala

  const dataSolusi = !diagnosa ? [] : diagnosa.data_saran_pengobatan

  const dataPenyakitLain = !diagnosa ? [] : diagnosa.hasil_diagnosa_penyakit_lain

  const dataHasilPakar = !diagnosa ? '' : diagnosa.hasil_pakar

  const handlePrint = useReactToPrint({
    content: () => componentPrintRef.current,
    pageStyle: `
      @media print {
        @page {
          size: 210mm 297mm;
        }

        body {
          font-size: 0.8em !important;
        }

        h5 {
          font-size: 1.2em !important;
        }
      }
    `,
    copyStyles: true,
    documentTitle: diagnosa && diagnosa.hasil_pakar.id_diagnosa_penyakit + '_diagnosa',
  })

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
            <button className="btn btn-cari" onClick={handlePrint}>
              <CIcon icon={cilPrint} />
              <span className="ms-2">Cetak</span>
            </button>
          </div>

          {/* Gejala */}
          {diagnosa && (
            <>
              <div className="container-pasien mb-4 mt-4">
                <CTable>
                  <CTableBody>
                    <CTableRow>
                      <th>ID Pasien</th>
                      <th>:</th>
                      <td>{dataPasien.id_pasien}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Nama Pasien</th>
                      <th>:</th>
                      <td>{dataPasien.nama}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Jenis Kelamin</th>
                      <th>:</th>
                      <td>{dataPasien.jkel == 1 ? 'Laki - Laki' : 'Perempuan'}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Tempat &amp; Tgl. Lahir</th>
                      <th>:</th>
                      <td>
                        {dataPasien.tmpt_lahir +
                          ', ' +
                          format(new Date(dataPasien.tgl_lahir), 'dd-MM-y')}
                      </td>
                    </CTableRow>
                    <CTableRow>
                      <th>Alamat</th>
                      <th>:</th>
                      <td>{dataPasien.alamat}</td>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </div>

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
                        {/* {dataHasilPakar.nm_penyakit} / CF ({dataHasilPakar.nilai_cf * 100} %) */}
                        {dataHasilPakar.nm_penyakit} ({dataHasilPakar.nilai_cf})
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
                        {/* {item.nm_penyakit} ({item.nilai_cf} / {item.nilai_cf * 100} %) */}
                        {item.nm_penyakit} ({item.nilai_cf})
                      </li>
                    ))}
                  </ul>
                </CCardBody>
              </CCard>
            </>
          )}

          {diagnosa && (
            <div style={{ display: 'none' }}>
              <ComponentToPrint ref={componentPrintRef} diagnosa={diagnosa} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HasilKonsultasi
