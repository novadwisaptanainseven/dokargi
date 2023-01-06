import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CRow, CCol, CCardHeader, CCardBody, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FormField } from 'src/components'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'
import { GlobalContext } from 'src/context/Provider'
import { insertUsers } from 'src/context/actions/Users'

const Tambah = () => {
  const history = useHistory()
  const [selectedFile, setSelectedFile] = useState(false)
  const [preview, setPreview] = useState()
  const [loading, setLoading] = useState(false)
  const { usersDispatch } = useContext(GlobalContext)

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null)
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

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('nama', values.nama)
    formData.append('username', values.username)
    formData.append('password', values.password)
    if (values.foto) {
      formData.append('foto', values.foto)
    }

    // for (let pair of formData.entries()) {
    //   console.log(pair)
    // }

    insertUsers(formData, setLoading, history, usersDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Tambah User</span>
          </h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <Formik
                initialValues={initState('')}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                }) => (
                  <CForm onSubmit={handleSubmit}>
                    <FormField
                      name="nama"
                      label="Nama"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan nama"
                      value={values.nama}
                      error={errors.nama && touched.nama}
                      errorMessage={errors.nama}
                    />
                    <FormField
                      name="username"
                      label="Username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan username"
                      value={values.username}
                      error={errors.username && touched.username}
                      errorMessage={errors.username}
                    />
                    <CRow>
                      <CCol md="6">
                        <FormField
                          type="password"
                          name="password"
                          label="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukkan password"
                          value={values.password}
                          error={errors.password && touched.password}
                          errorMessage={errors.password}
                        />
                      </CCol>
                      <CCol md="6">
                        <FormField
                          type="password"
                          name="konfirmasi_password"
                          label="Konfirmasi Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukkan konfirmasi password"
                          value={values.konfirmasi_password}
                          error={errors.konfirmasi_password && touched.konfirmasi_password}
                          errorMessage={errors.konfirmasi_password}
                        />
                      </CCol>
                    </CRow>

                    <FormField
                      type="file"
                      name="foto"
                      label="Foto"
                      onChange={(e) => {
                        setFieldValue('foto', e.target.files[0])
                        onSelectFile(e)
                      }}
                      onBlur={handleBlur}
                      placeholder="Masukkan foto penyakit"
                      value={values.foto}
                      error={errors.foto && touched.foto}
                      errorMessage={errors.foto}
                      preview={preview}
                      attention="File harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 1 mb"
                      isRequired={true}
                    />

                    <div className="d-flex flex-column-reverse flex-md-row justify-content-md-end gap-1">
                      <CButton
                        type="button"
                        onClick={() => {
                          handleReset()
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
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Tambah
