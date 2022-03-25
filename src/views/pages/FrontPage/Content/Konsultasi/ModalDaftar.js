import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormInput,
  CFormTextarea,
  CFormLabel,
  CRow,
  CCol,
  CModalFooter,
  CFormSelect,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import initState from './Formik/initState'
import validationSchema from './Formik/validationSchema'
import { FormField } from 'src/components'
import { daftarPasien } from 'src/context/actions/Pasien'

const ModalDaftar = ({
  visibility,
  onClose,
  setPasien,
  setKonsultasi,
  setIsCariBtnClicked,
  setLoadingSkeleton,
}) => {
  const [loading, setLoading] = useState(false)

  const jenisKelamin = [
    {
      label: '-- Jenis Kelamin --',
      value: '',
    },
    {
      label: 'Laki - Laki',
      value: 1,
    },
    {
      label: 'Perempuan',
      value: 2,
    },
  ]

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('nama', values.nama)
    formData.append('tmpt_lahir', values.tmpt_lahir)
    formData.append('tgl_lahir', values.tgl_lahir)
    formData.append('jkel', values.jkel)
    formData.append('alamat', values.alamat)

    for (let pair of formData.entries()) {
      console.log(pair)
    }

    setIsCariBtnClicked(true)
    daftarPasien(formData, setLoading, setPasien, setKonsultasi, onClose, setLoadingSkeleton)
  }

  return (
    <CModal alignment="center" size="lg" visible={visibility} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>Pendaftaran Pasien</CModalTitle>
      </CModalHeader>
      <Formik
        initialValues={initState}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <>
            <CForm onSubmit={handleSubmit}>
              <CModalBody>
                <div className="mb-3">
                  <FormField
                    name="nama"
                    label="Nama Pasien"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan nama pasien"
                    value={values.nama}
                    error={errors.nama && touched.nama}
                    errorMessage={errors.nama}
                  />
                </div>
                <div className="">
                  <CRow>
                    <CCol md="4">
                      <FormField
                        name="tmpt_lahir"
                        label="Tempat Lahir"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukkan tempat lahir"
                        value={values.tmpt_lahir}
                        error={errors.tmpt_lahir && touched.tmpt_lahir}
                        errorMessage={errors.tmpt_lahir}
                      />
                    </CCol>
                    <CCol md="4">
                      <FormField
                        type="date"
                        name="tgl_lahir"
                        label="Tanggal Lahir"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukkan tanggal lahir"
                        value={values.tgl_lahir}
                        error={errors.tgl_lahir && touched.tgl_lahir}
                        errorMessage={errors.tgl_lahir}
                      />
                    </CCol>
                    <CCol md="4">
                      <FormField
                        type="select"
                        name="jkel"
                        label="Jenis Kelamin"
                        placeholder="-- Jenis Kelamin --"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.jkel}
                        options={jenisKelamin}
                      />
                    </CCol>
                  </CRow>
                </div>
                <div className="mb-3">
                  <FormField
                    type="textarea"
                    rows={4}
                    name="alamat"
                    label="Alamat"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan alamat pasien"
                    value={values.alamat}
                    error={errors.alamat && touched.alamat}
                    errorMessage={errors.alamat}
                  />
                </div>
              </CModalBody>
              <CModalFooter>
                <button type="button" className="btn btn-daftar-batal btn-dark" onClick={onClose}>
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-daftar-save"
                  disabled={loading ? true : false}
                >
                  {loading ? 'Loading...' : 'Daftar'}
                </button>
              </CModalFooter>
            </CForm>
          </>
        )}
      </Formik>
    </CModal>
  )
}

ModalDaftar.propTypes = {
  visibility: PropTypes.bool,
  onClose: PropTypes.func,
  setPasien: PropTypes.func,
  setKonsultasi: PropTypes.func,
  setIsCariBtnClicked: PropTypes.func,
  setLoadingSkeleton: PropTypes.func,
}

export default ModalDaftar
