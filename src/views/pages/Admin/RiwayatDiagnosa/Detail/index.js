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
} from '@coreui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { SampleGambar } from 'src/assets'

const Detail = () => {
  const history = useHistory()

  const goBackToParentPage = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const dataGejala = [
    {
      id_diagnosa_gejala: 'DGK0001',
      id_diagnosa: 'DK0001',
      id_gejala: 'GK0014',
      id_kondisi: 'KK0001',
      id_pembuat: 0,
      waktu_buat: '2022-02-13 18:33:56',
      id_penggubah: 0,
      waktu_ubah: '2022-02-13 18:33:56',
      nm_gejala: 'Dentin terlihat',
      nm_kondisi: 'Ya',
    },
    {
      id_diagnosa_gejala: 'DGK0002',
      id_diagnosa: 'DK0001',
      id_gejala: 'GK0017',
      id_kondisi: 'KK0001',
      id_pembuat: 0,
      waktu_buat: '2022-02-13 18:33:56',
      id_penggubah: 0,
      waktu_ubah: '2022-02-13 18:33:56',
      nm_gejala: 'Gigi berlubang dan terasa nyeri meskipun tidak dipakai untuk mengunyah',
      nm_kondisi: 'Ya',
    },
  ]

  const dataSolusi = [
    {
      solusi:
        'Dokter perlu mengadakan analisa yang tepat untuk menegakkan diagnosa kepastian jenis penyakit.',
    },
    {
      solusi: 'Perawatan berulang-ulang biasanya empat sampai enam kali kunjungan.',
    },
    {
      solusi:
        'Dokter menggunakan berapa alat untuk perawatan saluran gigi dan memakai beragam antiseptik untuk mensterilisasi saluran akar yang terinfeksi.',
    },
    {
      solusi:
        'Diakhir perawatan dokter gigi mengganti saluran akar dan setelah lima sampai tujuh hari dilakukan penamalan tetap.',
    },
  ]

  const dataPenyakitLain = [
    {
      id_diagnosa_penyakit: 'DPK0001',
      id_diagnosa: 'DK0001',
      id_penyakit: 'PK0002',
      nilai_cf: 0.8704,
      id_pembuat: 0,
      waktu_buat: '2022-02-13 18:33:56',
      id_penggubah: 0,
      waktu_ubah: '2022-02-13 18:33:56',
      nm_penyakit: 'Karies Media',
    },
  ]

  return (
    <CCard>
      <CCardHeader>
        <h3 className="d-flex align-items-center gap-3">
          <a href="." onClick={(e) => goBackToParentPage(e)}>
            <CIcon icon={cilArrowLeft} size="xl" />
          </a>
          <span>Detail Hasil Diagnosa</span>
        </h3>
      </CCardHeader>
      <CCardBody>
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
              <CCol md="5">
                <img src={SampleGambar} alt="gambar-penyakit" className="w-100" />
              </CCol>
              <CCol>
                <CCardTitle>Karies Gigi Superficialis</CCardTitle>
                <CCardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis
                  deserunt harum doloremque natus aspernatur ipsam consequuntur dicta magnam, unde
                  fugiat? Sint dolor ducimus in eveniet exercitationem ipsam magnam amet?
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
      </CCardBody>
    </CCard>
  )
}

export default Detail
