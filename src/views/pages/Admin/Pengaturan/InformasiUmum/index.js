import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useState, useCallback, useEffect, useContext } from 'react'
import { FormField } from 'src/components'
import initState from './Formik/initState'
import validationSchema from './Formik/validationSchema'
import { GlobalContext } from 'src/context/Provider'
import { getKonten, editKonten } from 'src/context/actions/Konten'
import getImage from 'src/context/actions/Files/getImage'

const InformasiUmum = () => {
  const [selectedFile, setSelectedFile] = useState(false)
  const [preview, setPreview] = useState()
  const { kontenState, kontenDispatch } = useContext(GlobalContext)
  const { data: dataKonten } = kontenState
  const [loading, setLoading] = useState(false)

  // Get data konten
  useEffect(() => {
    getKonten(kontenDispatch)
  }, [kontenDispatch])

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    const gambar = dataKonten ? getImage('foto_kontak', dataKonten.logo) : null

    if (!selectedFile) {
      setPreview(gambar)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // Free memory when ever this component unmount
    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [selectedFile])

  useEffect(() => {
    handleSelectedFile()
  }, [handleSelectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
    }

    setSelectedFile(e.target.files[0])
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('title_website', values.title_website)
    formData.append('deskripsi_aplikasi', values.deskripsi_aplikasi)
    if (values.logo) {
      formData.append('logo', values.logo)
    }
    formData.append('nm_kampus', values.nm_kampus)
    formData.append('alamat_kampus', values.alamat_kampus)
    formData.append('tentang_kami', values.tentang_kami)

    for (let pair of formData.entries()) {
      console.log(pair)
    }

    editKonten(formData, setLoading, kontenDispatch)
  }

  return (
    <CCard>
      <CCardHeader>
        <h3>Informasi Umum</h3>
      </CCardHeader>
      <CCardBody>
        <Formik
          initialValues={initState(dataKonten)}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <CForm onSubmit={handleSubmit}>
              <CRow>
                <CCol md="6">
                  <FormField
                    name="title_website"
                    label="Nama Aplikasi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan nama aplikasi"
                    error={errors.title_website && touched.title_website}
                    errorMessage={errors.title_website}
                    value={values.title_website}
                  />
                  <FormField
                    name="deskripsi_aplikasi"
                    label="Deskripsi Aplikasi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan deskripsi aplikasi"
                    error={errors.deskripsi_aplikasi && touched.deskripsi_aplikasi}
                    errorMessage={errors.deskripsi_aplikasi}
                    value={values.deskripsi_aplikasi}
                  />
                  <FormField
                    type="file"
                    name="logo"
                    label="Logo Aplikasi"
                    onChange={(e) => {
                      setFieldValue('logo', e.target.files[0])
                      onSelectFile(e)
                    }}
                    onBlur={handleBlur}
                    placeholder="Masukkan logo aplikasi"
                    value={values.logo}
                    error={errors.logo && touched.logo}
                    errorMessage={errors.logo}
                    preview={preview}
                    attention="File harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 1 mb"
                    isRequired={false}
                  />
                </CCol>
                <CCol>
                  <FormField
                    name="nm_kampus"
                    label="Universitas Pembuat Skripsi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan nama universitas pembuat skripsi"
                    error={errors.nm_kampus && touched.nm_kampus}
                    errorMessage={errors.nm_kampus}
                    value={values.nm_kampus}
                  />
                  <FormField
                    type="textarea"
                    name="alamat_kampus"
                    label="Alamat Kampus"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan alamat kampus"
                    error={errors.alamat_kampus && touched.alamat_kampus}
                    errorMessage={errors.alamat_kampus}
                    value={values.alamat_kampus}
                  />
                  <FormField
                    type="textarea"
                    rows={5}
                    name="tentang_kami"
                    label="Tentang Kami"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Masukkan tentang kami"
                    error={errors.tentang_kami && touched.tentang_kami}
                    errorMessage={errors.tentang_kami}
                    value={values.tentang_kami}
                  />
                </CCol>
              </CRow>

              <div className="d-flex flex-column-reverse flex-md-row justify-content-md-end gap-1">
                <CButton
                  type="button"
                  onClick={() => {
                    handleReset()
                    setPreview(null)
                  }}
                  color="warning"
                >
                  Reset
                </CButton>
                <CButton type="submit" color="primary" disabled={loading}>
                  {loading ? 'Loading...' : 'Simpan'}
                </CButton>
              </div>
            </CForm>
          )}
        </Formik>
      </CCardBody>
    </CCard>
  )
}

export default InformasiUmum
