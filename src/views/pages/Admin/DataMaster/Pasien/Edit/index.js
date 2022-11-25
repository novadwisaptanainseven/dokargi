import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CRow, CCol, CCardHeader, CCardBody, CForm, CButton } from '@coreui/react'
import { Formik } from 'formik'
import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FormField } from 'src/components'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'
import { editPasien, getPasienById } from 'src/context/actions/Pasien'
import { GlobalContext } from 'src/context/Provider'

const Edit = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const { params } = match
  const [pasien, setPasien] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingEdit, setLoadingEdit] = useState(false)
  const { pasienDispatch } = useContext(GlobalContext)

  // Get pasien by id
  useEffect(() => getPasienById(params.id, setPasien, setLoading), [params])

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

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

    editPasien(params.id, formData, setLoadingEdit, history, pasienDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Edit Pasien</span>
          </h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <Formik
                initialValues={initState(pasien)}
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
                      name="nama"
                      label="Pasien"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan pasien"
                      value={values.nama}
                      error={errors.nama && touched.nama}
                      errorMessage={errors.nama}
                    />
                    <CRow>
                      <CCol md="6">
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
                      <CCol md="6">
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
                    </CRow>

                    <FormField
                      type="select"
                      name="jkel"
                      label="Jenis Kelamin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan jenis kelamin"
                      value={values.jkel}
                      options={[
                        { label: 'Pria', value: '1' },
                        { label: 'Wanita', value: '2' },
                      ]}
                      error={errors.jkel && touched.jkel}
                      errorMessage={errors.jkel}
                    />

                    <FormField
                      type="textarea"
                      rows={5}
                      name="alamat"
                      label="Alamat"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan alamat"
                      value={values.alamat}
                      error={errors.alamat && touched.alamat}
                      errorMessage={errors.alamat}
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
                      <CButton type="submit" color="primary" disabled={loadingEdit}>
                        {loadingEdit ? 'Loading...' : 'Simpan'}
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
