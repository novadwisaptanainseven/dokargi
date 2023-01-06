import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTableHead,
  CTableBody,
  CTable,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CCardTitle,
  CCardText,
  CRow,
  CCol,
  CButton,
} from '@coreui/react'
import React, { useEffect, useState, useRef } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { SampleGambar } from 'src/assets'
import { getDiagnosaById } from 'src/context/actions/Diagnosa'
import { ComponentToPrint, LoadingComponent } from 'src/components'
import getImage from 'src/context/actions/Files/getImage'
import { cilPrint } from '@coreui/icons'
import { useReactToPrint } from 'react-to-print'
import { format } from 'date-fns'

const Detail = () => {
  const history = useHistory()
  const [diagnosa, setDiagnosa] = useState('')
  const match = useRouteMatch()
  const { params } = match
  const componentPrintRef = useRef()

  // Handle print diagnosa
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

  // Get diagnosa by id
  useEffect(() => {
    getDiagnosaById(params.id, setDiagnosa)
  }, [params])

  // console.log(diagnosa)

  const goBackToParentPage = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const dataPasien = !diagnosa ? [] : diagnosa.data_pasien

  const dataGejala = !diagnosa
    ? []
    : diagnosa.data_gejala.map((item) => ({
        id_diagnosa_gejala: item.id_diagnosa_gejala,
        id_diagnosa: item.id_diagnosa,
        id_gejala: item.id_gejala,
        id_kondisi: item.id_kondisi,
        id_pembuat: item.id_pembuat,
        waktu_buat: item.waktu_buat,
        id_penggubah: item.id_penggubah,
        waktu_ubah: item.waktu_ubah,
        nm_gejala: item.nm_gejala,
        nm_kondisi: item.nm_kondisi,
      }))

  const dataSolusi = !diagnosa
    ? []
    : diagnosa.data_saran_pengobatan.map((item) => ({
        solusi: item.solusi,
      }))

  const dataPenyakitLain = !diagnosa
    ? []
    : diagnosa.hasil_diagnosa_penyakit_lain.map((item) => ({
        id_diagnosa_penyakit: item.id_diagnosa_penyakit,
        id_diagnosa: item.id_diagnosa,
        id_penyakit: item.id_penyakit,
        nilai_cf: item.nilai_cf,
        id_pembuat: item.id_pembuat,
        waktu_buat: item.waktu_buat,
        id_penggubah: item.id_penggubah,
        waktu_ubah: item.waktu_ubah,
        nm_penyakit: item.nm_penyakit,
      }))

  return (
    <>
      {/* Loading Component */}
      {!diagnosa ? (
        <LoadingComponent />
      ) : (
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h3 className="d-flex align-items-center gap-3">
              <a href="." onClick={(e) => goBackToParentPage(e)}>
                <CIcon icon={cilArrowLeft} size="xl" />
              </a>
              <span>Detail Hasil Diagnosa</span>
            </h3>
            <CButton type="button" color="warning" style={{ height: '40px' }} onClick={handlePrint}>
              <CIcon icon={cilPrint} /> Cetak
            </CButton>
          </CCardHeader>
          <CCardBody>
            <div className="container-pasien mb-4">
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

            {/* Gejala */}
            <div className="mb-4">
              <h5>Gejala - Gejala</h5>
              <CTable striped>
                <CTableHead className="bg-info">
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
            <CCard className={`mb-4 border-info`}>
              <CCardHeader className="bg-info text-white">
                <h5 className="mb-0">Diagnosis Penyakit</h5>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol md="5" className="mb-3">
                    <img
                      src={getImage('foto_penyakit', diagnosa.hasil_pakar.gambar)}
                      alt={getImage('foto_penyakit', diagnosa.hasil_pakar.gambar)}
                      className="w-100"
                    />
                  </CCol>
                  <CCol>
                    <CCardTitle>
                      {diagnosa.hasil_pakar.nm_penyakit} ({diagnosa.hasil_pakar.nilai_cf})
                    </CCardTitle>
                    <CCardText style={{ textAlign: 'justify' }}>
                      {diagnosa.hasil_pakar.deskripsi}
                    </CCardText>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>

            {/* Saran Pengobatan */}
            <CCard className={`mb-4 border-warning`}>
              <CCardHeader className="bg-warning">
                <h5 className="mb-0">Saran Pengobatan</h5>
              </CCardHeader>
              <CCardBody>
                <ul>
                  {dataSolusi.map((item, idx) => (
                    <li key={idx}>{item.solusi}</li>
                  ))}
                </ul>
              </CCardBody>
            </CCard>

            {/* Penyakit Lain */}
            <CCard className={`mb-4 border-dark`}>
              <CCardHeader className="bg-dark text-white">
                <h5 className="mb-0">Kemungkinan Penyakit Lain</h5>
              </CCardHeader>
              <CCardBody>
                <ul>
                  {dataPenyakitLain.map((item, idx) => (
                    <li key={idx}>
                      {/* {item.nm_penyakit} ({item.nilai_cf} / {item.nilai_cf * 100} %) */}
                      {item.nm_penyakit} ({item.nilai_cf})
                    </li>
                  ))}
                </ul>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      )}

      {/* Component for Printng */}
      {diagnosa && (
        <div style={{ display: 'none' }}>
          <ComponentToPrint ref={componentPrintRef} diagnosa={diagnosa} />
        </div>
      )}
    </>
  )
}

export default Detail
