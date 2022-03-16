import {
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState } from 'react'
import { NoPatient } from 'src/assets'
import Banner from './Banner'
import ModalDaftar from './ModalDaftar'
import { useHistory } from 'react-router-dom'

const Konsultasi = () => {
  const [pasien, setPasien] = useState(false)
  const [modalDaftar, setModalDaftar] = useState(false)
  const history = useHistory()

  const handleTombolCari = () => {
    setPasien(!pasien)
  }

  const goToHasilDiagnosa = () => {
    history.push(`/konsultasi/hasil`)
  }

  return (
    <div className="container-konsultasi pb-5">
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

          <h4 className="text-center text-md-start">Cari Pasien</h4>
          <div className="aksi-cari d-flex gap-2 mb-3 flex-column flex-md-row">
            <input type="text" name="keyword-cari" />
            <button type="button" className="btn btn-cari" onClick={handleTombolCari}>
              Cari
            </button>
            <button type="button" className="btn btn-daftar" onClick={() => setModalDaftar(true)}>
              Daftar
            </button>
          </div>

          {!pasien ? (
            <>
              <div className="d-flex flex-column align-items-center no-patient-ilustration gap-3">
                <img src={NoPatient} alt="no-patient-ilustration" />
                <h3>Pasien Belum Dicari</h3>
              </div>
            </>
          ) : (
            <>
              <div className="container-pasien mb-4">
                <CTable>
                  <CTableBody>
                    <CTableRow>
                      <th>ID Pasien</th>
                      <th>:</th>
                      <td>PS0001</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Nama Pasien</th>
                      <th>:</th>
                      <td>Nova Dwi Sapta Nain Seven</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Tempat &amp; Tgl. Lahir</th>
                      <th>:</th>
                      <td>Tanjung Redeb, 27 November 1997</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Alamat</th>
                      <th>:</th>
                      <td>Jalan Slamet Riyadi Gg. Hikmah, RT.05, No. 08, Kelurahan Karang Asam</td>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </div>

              <div>
                <h4>Konsultasi Keluhan &amp; Gejala</h4>

                <div className="alert-dokargi mb-3">
                  Silahkan memilih gejala sesuai dengan kondisi gigi Anda, Anda dapat memilih
                  kepastian kondisi dari pasti sampai dengan tidak pasti. Jika sudah, tekan tombol
                  Hasil Diagnosis untuk melihat hasil
                </div>

                <CTable responsive="sm" borderless striped>
                  <CTableHead style={{ backgroundColor: '#16B0C8' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" className="text-white">
                        No.
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Kode
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Gejala
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="text-white">
                        Pilih Kondisi
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>G0001</CTableDataCell>
                      <CTableDataCell width={700}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse iusto
                        ratione enim repellendus impedit numquam veritatis molestiae quibusdam.
                        Molestias!
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          aria-label="Pilih Gejala"
                          options={[
                            'Pilih Gejala',
                            { label: 'One', value: '1' },
                            { label: 'Two', value: '2' },
                            { label: 'Three', value: '3', disabled: true },
                          ]}
                        />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>G0002</CTableDataCell>
                      <CTableDataCell width={700}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse iusto
                        ratione enim repellendus impedit numquam veritatis molestiae quibusdam.
                        Molestias!
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          aria-label="Pilih Gejala"
                          options={[
                            'Pilih Gejala',
                            { label: 'One', value: '1' },
                            { label: 'Two', value: '2' },
                            { label: 'Three', value: '3', disabled: true },
                          ]}
                        />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>G0003</CTableDataCell>
                      <CTableDataCell width={700}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse iusto
                        ratione enim repellendus impedit numquam veritatis molestiae quibusdam.
                        Molestias!
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect
                          aria-label="Pilih Gejala"
                          options={[
                            'Pilih Gejala',
                            { label: 'One', value: '1' },
                            { label: 'Two', value: '2' },
                            { label: 'Three', value: '3', disabled: true },
                          ]}
                        />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>

                <div className="d-flex justify-content-center">
                  <button className="btn btn-diagnosa" onClick={goToHasilDiagnosa}>
                    Hasil Diagnosa
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal Daftar Pasien */}
      <ModalDaftar visibility={modalDaftar} onClose={() => setModalDaftar(false)} />
    </div>
  )
}

export default Konsultasi
