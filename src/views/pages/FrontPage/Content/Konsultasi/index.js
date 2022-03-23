import {
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { NoPatient } from 'src/assets'
import Banner from './Banner'
import ModalDaftar from './ModalDaftar'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { baseRoutePath } from 'src/helpers/url'
import { getPasienById } from 'src/context/actions/Pasien'
import { LoadingSkeletonKonsultasi } from '../../Components'
import { format } from 'date-fns'

const Konsultasi = () => {
  const [pasien, setPasien] = useState(false)
  const [modalDaftar, setModalDaftar] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [pencarian, setPencarian] = useState('')
  const match = useRouteMatch()
  const { url } = match
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isCariBtnClicked, setIsCariBtnClicked] = useState(false)

  const handleTombolCari = () => {
    setIsCariBtnClicked(true)

    getPasienById(pencarian, setPasien, setLoading)
  }

  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }

  const goToHasilDiagnosa = () => {
    history.push(`${url}/hasil`)
  }

  const goToBantuanPage = (e) => {
    e.preventDefault()
    history.push(baseRoutePath + 'bantuan')
  }

  return (
    <div className="container-konsultasi pb-5">
      {/* Banner */}
      <Banner />

      {/* Body Content */}
      <div className="content-konsultasi mt-5">
        <div className="container">
          <div className="alert-dokargi mb-3">
            Silahkan mencari pasien berdasarkan <b>id pasien</b> apabila sudah pernah daftar sebelum
            memilih gejala. Jika belum, daftar terlebih dahulu. Lebih jelasnya, silahkan baca
            panduan di{' '}
            <a href={baseRoutePath + 'bantuan'} onClick={(e) => goToBantuanPage(e)}>
              menu bantuan
            </a>{' '}
            untuk mengetahui alur konsultasi
          </div>

          <h4 className="text-center text-md-start">Cari ID Pasien</h4>
          <div className="aksi-cari d-flex gap-2 mb-3 flex-column flex-md-row">
            <input
              type="text"
              name="keyword-cari"
              placeholder="ID Pasien"
              onChange={(e) => handlePencarian(e)}
            />
            <button
              type="button"
              className="btn btn-cari"
              onClick={handleTombolCari}
              disabled={!pencarian ? true : false}
            >
              Cari
            </button>
            <button type="button" className="btn btn-daftar" onClick={() => setModalDaftar(true)}>
              Daftar
            </button>
          </div>

          {loading && <LoadingSkeletonKonsultasi />}

          {/* Jika user belum mengisi kolom pencarian pasien */}
          {!isCariBtnClicked && !loading && (
            <>
              <div className="d-flex flex-column align-items-center no-patient-ilustration gap-3">
                <img src={NoPatient} alt="no-patient-ilustration" />
                <h3>Pasien Belum Dicari</h3>
              </div>
            </>
          )}

          {/* Jika user sudah mencari tapi data pasien tidak ditemukan */}
          {isCariBtnClicked && !pasien && !loading && (
            <div className="d-flex flex-column align-items-center no-patient-ilustration gap-3">
              <img src={NoPatient} alt="no-patient-ilustration" />
              <h3>Pasien Tidak Ditemukan</h3>
            </div>
          )}

          {/* Jika pasien ditemukan */}
          {pasien && !loading && (
            <>
              <div className="container-pasien mb-4">
                <CTable>
                  <CTableBody>
                    <CTableRow>
                      <th>ID Pasien</th>
                      <th>:</th>
                      <td>{pasien.id_pasien}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Nama Pasien</th>
                      <th>:</th>
                      <td>{pasien.nama}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Jenis Kelamin</th>
                      <th>:</th>
                      <td>{pasien.jkel}</td>
                    </CTableRow>
                    <CTableRow>
                      <th>Tempat &amp; Tgl. Lahir</th>
                      <th>:</th>
                      <td>
                        {pasien.tmpt_lahir + ', ' + format(new Date(pasien.tgl_lahir), 'dd-MM-y')}
                      </td>
                    </CTableRow>
                    <CTableRow>
                      <th>Alamat</th>
                      <th>:</th>
                      <td>{pasien.alamat}</td>
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
