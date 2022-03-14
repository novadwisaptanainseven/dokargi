import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormInput,
  CFormTextarea,
  CFormLabel,
  CRow,
  CCol,
  CModalFooter,
} from '@coreui/react'
import PropTypes from 'prop-types'

const ModalDaftar = ({ visibility, onClose }) => {
  return (
    <CModal alignment="center" size="lg" visible={visibility} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>Pendaftaran Pasien</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <div className="mb-3">
            <CFormLabel>Nama Pasien</CFormLabel>
            <CFormInput type="text" name="nama_pasien" placeholder="Nama Pasien" />
          </div>
          <div className="mb-3">
            <CRow>
              <CCol md="6" className="mb-3">
                <CFormLabel>Tempat Lahir</CFormLabel>
                <CFormInput type="text" name="tmpt_lahir" placeholder="Tempat Lahir" />
              </CCol>
              <CCol md="6">
                <CFormLabel>Tgl Lahir</CFormLabel>
                <CFormInput type="date" name="tmpt_lahir" />
              </CCol>
            </CRow>
          </div>
          <div className="mb-3">
            <CFormLabel>Alamat Pasien</CFormLabel>
            <CFormTextarea rows={4} name="alamat" placeholder="Alamat Pasien" />
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <button className="btn btn-daftar-batal btn-dark" onClick={onClose}>
          Batal
        </button>
        <button className="btn btn-daftar-save">Daftar</button>
      </CModalFooter>
    </CModal>
  )
}

ModalDaftar.propTypes = {
  visibility: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalDaftar
