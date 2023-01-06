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
import { insertGejala } from 'src/context/actions/Gejala'

const Tambah = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const { gejalaDispatch } = useContext(GlobalContext)

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('nm_gejala', values.nm_gejala)

    // for (let pair of formData.entries()) {
    //   console.log(pair)
    // }

    insertGejala(formData, setLoading, history, gejalaDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Tambah Gejala</span>
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
                      name="nm_gejala"
                      label="Gejala"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan gejala"
                      value={values.nm_gejala}
                      error={errors.nm_gejala && touched.nm_gejala}
                      errorMessage={errors.nm_gejala}
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
