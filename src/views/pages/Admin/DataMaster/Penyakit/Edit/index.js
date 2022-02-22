import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CRow, CCol, CCardHeader, CCardBody, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { FormField } from 'src/components'
import getImage from 'src/context/actions/Files/getImage'
import { editPenyakit, getPenyakitById } from 'src/context/actions/Penyakit'
import { GlobalContext } from 'src/context/Provider'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'

const Edit = () => {
  const history = useHistory()
  const [selectedFile, setSelectedFile] = useState(false)
  const [preview, setPreview] = useState()
  const match = useRouteMatch()
  const { params } = match
  const [loading, setLoading] = useState(false)
  const { penyakitDispatch } = useContext(GlobalContext)
  const [penyakit, setPenyakit] = useState('')

  // Get penyakit by id
  useEffect(() => {
    getPenyakitById(params.id, setPenyakit)
  }, [params])

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    const gambar = penyakit ? getImage('foto_penyakit', penyakit.gambar) : null

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
  }, [selectedFile, penyakit])

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

    formData.append('nm_penyakit', values.nm_penyakit)
    formData.append('deskripsi', values.deskripsi)
    if (values.gambar) {
      formData.append('gambar', values.gambar)
    }

    for (let pair of formData.entries()) {
      console.log(pair)
    }

    editPenyakit(params.id, formData, setLoading, history, penyakitDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Edit Penyakit</span>
          </h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <Formik
                initialValues={initState(penyakit)}
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
                      name="nm_penyakit"
                      label="Nama Penyakit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan nama penyakit"
                      value={values.nm_penyakit}
                      error={errors.nm_penyakit && touched.nm_penyakit}
                      errorMessage={errors.nm_penyakit}
                    />
                    <FormField
                      type="textarea"
                      rows={5}
                      name="deskripsi"
                      label="Deskripsi Penyakit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan deskripsi penyakit"
                      value={values.deskripsi}
                      error={errors.deskripsi && touched.deskripsi}
                      errorMessage={errors.deskripsi}
                    />
                    <FormField
                      type="file"
                      name="gambar"
                      label="Gambar Penyakit"
                      onChange={(e) => {
                        setFieldValue('gambar', e.target.files[0])
                        onSelectFile(e)
                      }}
                      onBlur={handleBlur}
                      placeholder="Masukkan gambar penyakit"
                      value={values.gambar}
                      error={errors.gambar && touched.gambar}
                      errorMessage={errors.gambar}
                      preview={preview}
                      attention="File harus bertipe jpg, jpeg, atau png dengan ukuran kurang dari 1 mb"
                      isRequired={false}
                    />

                    <div className="d-flex justify-content-end gap-1">
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
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Edit
