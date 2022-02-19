import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { LoginIlustration, SampleGambar } from 'src/assets'
import { Formik } from 'formik'
import validationSchema from './Formik/validationSchema'
import initState from './Formik/initState'

const Login = () => {
  const handleFormSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    initialValues={initState}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                  >
                    {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
                      <CForm onSubmit={handleSubmit}>
                        <h2 className="mb-3">Login Administrator</h2>
                        <p className="text-medium-emphasis">Masuk ke aplikasi Dokargi</p>
                        <CInputGroup className="mb-1">
                          <CInputGroupText
                            className={
                              errors.username && touched.username
                                ? 'text-danger border-danger'
                                : null
                            }
                          >
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder="Username"
                            autoComplete="username"
                            className={errors.username && touched.username ? 'is-invalid' : null}
                          />
                        </CInputGroup>
                        {errors.username && touched.username && (
                          <div className="text-danger">{errors.username}</div>
                        )}
                        <CInputGroup className="mt-2">
                          <CInputGroupText
                            className={
                              errors.password && touched.password
                                ? 'text-danger border-danger'
                                : null
                            }
                          >
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={errors.password && touched.password ? 'is-invalid' : null}
                          />
                        </CInputGroup>
                        {errors.password && touched.password && (
                          <div className="text-danger">{errors.password}</div>
                        )}
                        <div className="mt-2 d-md-flex justify-content-sm-end">
                          <CButton type="submit" color="primary" className="px-4 btn-tambah">
                            Login
                          </CButton>
                        </div>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white overflow-hidden d-none d-md-block">
                <img
                  src={LoginIlustration}
                  alt="ilustrasi-login"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
