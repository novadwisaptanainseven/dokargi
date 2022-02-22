import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CAlert,
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
import { GlobalContext } from 'src/context/Provider'
import { useHistory } from 'react-router-dom'
import { getKonten } from 'src/context/actions/Konten'
import { checkToken, login } from 'src/context/actions/Auth'
import { CLEAN_UP } from 'src/context/actionTypes'

import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal = withReactContent(swal2)

const Login = () => {
  const history = useHistory()
  const { loginState, loginDispatch, kontenState, kontenDispatch } = useContext(GlobalContext)
  const { loading, error } = loginState
  const { data: dataKonten } = kontenState

  useEffect(() => {
    getKonten(kontenDispatch)
  }, [kontenDispatch])

  useEffect(() => {
    // Untuk menampilkan alert ketika user belum logout
    checkToken(history, Swal)

    return () => {
      loginDispatch({
        type: CLEAN_UP,
      })
    }
  }, [loginDispatch, history])

  const handleFormSubmit = (values) => {
    console.log(values)

    login(values, loginDispatch)
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
                        {/* Alert if login failed */}
                        {error && (
                          <CAlert color="danger" dismissible>
                            {error}
                          </CAlert>
                        )}

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
                          <CButton
                            type="submit"
                            color="primary"
                            className="px-4 btn-tambah"
                            disabled={loading ? true : false}
                          >
                            {loading ? 'Loading...' : 'Masuk'}
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
