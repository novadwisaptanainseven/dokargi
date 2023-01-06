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
import { insertKondisi } from 'src/context/actions/Kondisi'

const Tambah = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const { kondisiDispatch } = useContext(GlobalContext)

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('nm_kondisi', values.nm_kondisi)
    formData.append('bobot', values.bobot)

    // for (let pair of formData.entries()) {
    //   console.log(pair)
    // }

    insertKondisi(formData, setLoading, history, kondisiDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Tambah Kondisi</span>
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
                }) => (
                  <CForm onSubmit={handleSubmit}>
                    <FormField
                      name="nm_kondisi"
                      label="Kondisi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan Kondisi"
                      value={values.nm_kondisi}
                      error={errors.nm_kondisi && touched.nm_kondisi}
                      errorMessage={errors.nm_kondisi}
                    />
                    <FormField
                      type="number"
                      name="bobot"
                      label="Bobot"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan Bobot. Contoh: 0.1"
                      value={values.bobot}
                      error={errors.bobot && touched.bobot}
                      errorMessage={errors.bobot}
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
