import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTable,
  CTableHead,
} from '@coreui/react'
import getImage from 'src/context/actions/Files/getImage'

export class ComponentToPrint extends React.Component {
  render() {
    const { diagnosa } = this.props

    const dataGejala = diagnosa.data_gejala.map((item) => ({
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

    const dataSolusi = diagnosa.data_saran_pengobatan.map((item) => ({
      solusi: item.solusi,
    }))

    const dataPenyakitLain = diagnosa.hasil_diagnosa_penyakit_lain.map((item) => ({
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
      <div>
        <div>
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
              <CCol>
                <img
                  src={getImage('foto_penyakit', diagnosa.hasil_pakar.gambar)}
                  alt={getImage('foto_penyakit', diagnosa.hasil_pakar.gambar)}
                  className="w-100"
                />
              </CCol>
              <CCol>
                <CCardTitle>{diagnosa.hasil_pakar.nm_penyakit}</CCardTitle>
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
                  {item.nm_penyakit} ({item.nilai_cf} / {item.nilai_cf * 100} %)
                </li>
              ))}
            </ul>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

ComponentToPrint.propTypes = {
  diagnosa: PropTypes.object,
}
