import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CRow,
  CCol,
  CCardHeader,
  CCardBody,
  CForm,
  CButton,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import { Formik } from 'formik'
import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FormField } from 'src/components'
import initState from '../Formik/initState'
import validationSchema from '../Formik/validationSchema'
import { GlobalContext } from 'src/context/Provider'
import { getInsertBobot, insertBobot } from 'src/context/actions/Bobot'

const Tambah = () => {
  const history = useHistory()
  const { bobotDispatch } = useContext(GlobalContext)
  const [dataInsertBobot, setInsertBobot] = useState('')
  const [loading, setLoading] = useState(false)

  // Get insert bobot
  useEffect(() => getInsertBobot(setInsertBobot), [])

  const options = !dataInsertBobot
    ? []
    : dataInsertBobot.data_penyakit.map((item) => ({
        value: item.id_penyakit,
        label: item.nm_penyakit,
      }))

  const optionsGejala = !dataInsertBobot
    ? []
    : dataInsertBobot.data_gejala.map((item) => ({
        value: item.id_gejala,
        label: item.nm_gejala,
      }))

  // const options = [
  //   { value: 'PK0001', label: 'Karies Gigi Superficialis' },
  //   { value: 'PK0002', label: 'Karies Gigi Media' },
  // ]

  // const optionsGejala = [
  //   { value: 'GJ0001', label: 'Karies Gigi Superficialis' },
  //   { value: 'GJ0002', label: 'Karies Gigi Media' },
  // ]

  const goBackToParentPage = (e) => {
    e.preventDefault()

    history.goBack()
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData()

    formData.append('id_penyakit', values.id_penyakit)
    formData.append('id_gejala', values.id_gejala)
    formData.append('nilai_mb', values.nilai_mb)
    formData.append('nilai_md', values.nilai_md)

    // for (let pair of formData.entries()) {
    //   console.log(pair)
    // }

    insertBobot(formData, setLoading, history, bobotDispatch)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Tambah Bobot</span>
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
                      type="selectdata"
                      options={options}
                      id="id_penyakit"
                      name="id_penyakit"
                      label="Penyakit"
                      onChange={(opt) => setFieldValue('id_penyakit', opt ? opt.value : '')}
                      onBlur={handleBlur}
                      placeholder="-- Pilih Penyakit --"
                      value={values.id_penyakit}
                      error={errors.id_penyakit && touched.id_penyakit}
                      errorMessage={errors.id_penyakit}
                      disabled={!dataInsertBobot ? true : false}
                    />
                    <FormField
                      type="selectdata"
                      options={optionsGejala}
                      name="id_gejala"
                      label="Gejala"
                      onChange={(opt) => setFieldValue('id_gejala', opt ? opt.value : '')}
                      onBlur={handleBlur}
                      placeholder="-- Pilih Gejala --"
                      value={values.id_gejala}
                      error={errors.id_gejala && touched.id_gejala}
                      errorMessage={errors.id_gejala}
                      disabled={!dataInsertBobot ? true : false}
                    />
                    <FormField
                      type="number"
                      name="nilai_mb"
                      label="Nilai MB"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan nilai MB. Contoh: 0.2"
                      value={values.nilai_mb}
                      error={errors.nilai_mb && touched.nilai_mb}
                      errorMessage={errors.nilai_mb}
                    />
                    <FormField
                      type="number"
                      name="nilai_md"
                      label="Nilai MD"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Masukkan nilai MD. Contoh: 0.4"
                      value={values.nilai_md}
                      error={errors.nilai_md && touched.nilai_md}
                      errorMessage={errors.nilai_md}
                    />

                    <div className="d-flex flex-column-reverse flex-md-row justify-content-md-end gap-1">
                      {/* <CButton
                        type="button"
                        onClick={() => {
                          handleReset()
                        }}
                        color="warning"
                      >
                        Reset
                      </CButton> */}
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
