import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CRow, CCol, CCardHeader, CCardBody, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { FormField } from 'src/components'
import { editSolusi, getSolusiById } from 'src/context/actions/Solusi'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'

const Edit = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { params } = match
  const [loading, setLoading] = useState(false)
  const [solusi, setSolusi] = useState('')

  console.log(params)

  // Get data solusi by id
  useEffect(() => getSolusiById(params.idSolusi, setSolusi), [params])

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('id_penyakit', params.id)
    formData.append('solusi', values.solusi)

    for (let pair of formData.entries()) {
      console.log(pair)
    }

    editSolusi(params.idSolusi, params.id, formData, setLoading, history, setSolusi)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Edit Solusi untuk Penyakit {params.id}</span>
          </h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <Formik
                initialValues={initState(solusi)}
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
                      name="solusi"
                      label="Solusi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan solusi"
                      value={values.solusi}
                      error={errors.solusi && touched.solusi}
                      errorMessage={errors.solusi}
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

export default Edit
