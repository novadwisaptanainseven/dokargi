import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CRow, CCol, CCardHeader, CCardBody, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormField } from 'src/components'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'

const Edit = () => {
  const history = useHistory()

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('nm_gejala', values.nm_gejala)

    for (let pair of formData.entries()) {
      console.log(pair)
    }
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Edit Gejala</span>
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
                      <CButton type="submit" color="primary">
                        Simpan
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
