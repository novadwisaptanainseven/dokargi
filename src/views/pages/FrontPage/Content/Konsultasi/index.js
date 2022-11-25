import {
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState, useEffect, useContext } from 'react'
import { NoPatient } from 'src/assets'
import Banner from './Banner'
import ModalDaftar from './ModalDaftar'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { baseRoutePath } from 'src/helpers/url'
import { getPasienById } from 'src/context/actions/Pasien'
import { GlobalContext } from 'src/context/Provider'
import { getKonsultasiDiagnosa, insertDiagnosa } from 'src/context/actions/Diagnosa'
import { LoadingSkeletonKonsultasi } from '../../Components'
import { format } from 'date-fns'
import { changeValueObj, removeArrayByValue } from 'src/helpers/functions'

const Konsultasi = () => {
  const [pasien, setPasien] = useState('')
  const [konsultasi, setKonsultasi] = useState('')
  const [modalDaftar, setModalDaftar] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [pencarian, setPencarian] = useState('')
  const match = useRouteMatch()
  const { url } = match
  const [isCariBtnClicked, setIsCariBtnClicked] = useState(false)
  const [listDiagnosaGejala, setListDiagnosaGejala] = useState([])
  const [listDiagnosaKondisi, setListDiagnosaKondisi] = useState([])
  const { hasilDiagnosaState, hasilDiagnosaDispatch } = useContext(GlobalContext)
  const { loading: loadingDiagnosa } = hasilDiagnosaState

  const listKondisi = !konsultasi
    ? []
    : konsultasi.data_kondisi.map((item, idx) => {
        if (idx == 0) {
          return {
            label: item.nm_kondisi,
            value: item.bobot,
          }
        }

        return {
          label: item.nm_kondisi,
          value: item.bobot,
        }
      })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleTombolCari = () => {
    setIsCariBtnClicked(true)
    setListDiagnosaGejala([])

    getPasienById(pencarian, setPasien, setLoading)
    getKonsultasiDiagnosa(pencarian, setKonsultasi)
  }

  const handlePencarian = (e) => {
    setPencarian(e.target.value)
  }

  const goToHasilDiagnosa = () => {
    const hasil = {
      input_diagnosa: listDiagnosaGejala,
    }

    insertDiagnosa(pasien.id_pasien, hasil, history, hasilDiagnosaDispatch)
  }

  const goToBantuanPage = (e) => {
    e.preventDefault()
    history.push(baseRoutePath + 'bantuan')
  }

  useEffect(() => {
    console.log(listDiagnosaGejala)
    // console.log(listDiagnosaKondisi)
  }, [listDiagnosaGejala, listDiagnosaKondisi])

  const handlePilihGejala = (e) => {
    const { name: idGejala, value: kondisi } = e.target

    // Cari id kondisi berdasarkan bobot kondisi
    const idKondisi =
      konsultasi.data_kondisi.filter((item) => item.bobot.toString() == kondisi)[0]?.id_kondisi ||
      '0'

    if (kondisi != '0') {
      const gejalaHasExist = listDiagnosaGejala.filter((item) => item.id_gejala.includes(idGejala))

      // Mengatasi jika ada ID gejala yang sama maka tidak akan dipush ke array lagi
      const valueDiagnosa = {
        id_gejala: idGejala,
        id_kondisi: idKondisi,
      }
      if (gejalaHasExist.length == 0) {
        setListDiagnosaGejala([...listDiagnosaGejala, valueDiagnosa])
      } else {
        // Ganti id kondisi lama dengan id kondisi baru
        changeValueObj(listDiagnosaGejala, idGejala, idKondisi)
        setListDiagnosaGejala([...listDiagnosaGejala])
      }

      // listDiagnosaKondisi.pop()

      // setListDiagnosaKondisi([...listDiagnosaKondisi, idKondisi])
    } else {
      // const arrAfterRemove = removeArrayByValue([...listDiagnosaGejala], idGejala)
      const arrAfterRemove = listDiagnosaGejala.filter((item) => item.id_gejala != idGejala)

      setListDiagnosaGejala(arrAfterRemove)
    }
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
            memilih gejala. Jika belum, daftar terlebih dahulu.
            {/* Lebih jelasnya, silahkan baca panduan di{' '}
            <a href={baseRoutePath + 'bantuan'} onClick={(e) => goToBantuanPage(e)}>
              menu bantuan
            </a>{' '}
            untuk mengetahui alur konsultasi */}
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
          {pasien && konsultasi && !loading && (
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
                      <td>{pasien.jkel == 1 ? 'Laki - Laki' : 'Perempuan'}</td>
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
                  kepastian kondisi dari sangat setuju sampai dengan sangat tidak setuju. Jika
                  sudah, tekan tombol Hasil Diagnosis untuk melihat hasil
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
                    {konsultasi.data_gejala.map((item, idx) => (
                      <CTableRow key={idx}>
                        <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.id_gejala}</CTableDataCell>
                        <CTableDataCell width={700}>{item.nm_gejala}</CTableDataCell>
                        <CTableDataCell>
                          <CFormSelect
                            name={item.id_gejala}
                            aria-label="Pilih Gejala"
                            options={[
                              {
                                label: 'Pilih Gejala',
                                value: '0',
                              },
                              ...listKondisi,
                            ]}
                            defaultValue={''}
                            onChange={(e) => handlePilihGejala(e)}
                          />
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                <div
                  className={`${
                    listDiagnosaGejala.length > 0 ? 'd-flex' : 'd-none'
                  } justify-content-center`}
                >
                  <button
                    className="btn btn-diagnosa"
                    onClick={goToHasilDiagnosa}
                    disabled={loadingDiagnosa}
                  >
                    {loadingDiagnosa ? 'Harap tunggu...' : 'Hasil Diagnosa'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal Daftar Pasien */}
      <ModalDaftar
        visibility={modalDaftar}
        onClose={() => setModalDaftar(false)}
        setPasien={setPasien}
        setKonsultasi={setKonsultasi}
        setIsCariBtnClicked={setIsCariBtnClicked}
        setLoadingSkeleton={setLoading}
      />
    </div>
  )
}

export default Konsultasi
