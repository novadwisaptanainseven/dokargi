import { CFormInput, CFormLabel, CFormText, CFormTextarea } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({
  type = 'text',
  label,
  name,
  error,
  errorMessage = '',
  value,
  onChange,
  onBlur,
  placeholder = '',
  rows = 3,
  attention = '',
  preview,
  isRequired = true,
}) => {
  return (
    <div className="mb-3">
      {/* If input type is text */}
      {type === 'text' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormInput
            type="text"
            name={name}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
            className={error ? 'is-invalid' : null}
          />
          {error && <div className="invalid-feedback">{errorMessage}</div>}
        </>
      )}
      {/* If input type is textarea */}
      {type === 'textarea' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormTextarea
            name={name}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
            rows={rows}
            className={error ? 'is-invalid' : null}
          />
          {error && <div className="invalid-feedback">{errorMessage}</div>}
        </>
      )}
      {/* If input type is file */}
      {type === 'file' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormInput
            type="file"
            name={name}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={error ? 'is-invalid' : null}
          />
          {error && <div className="invalid-feedback">{errorMessage}</div>}
          {preview && (
            <img src={preview} alt={preview} className="img-thumbnail mt-2 mb-1" width={200} />
          )}
          {!isRequired && (
            <div className="mt-1">
              <b>Boleh dikosongkan jika tidak ada gambar</b>
            </div>
          )}
          <CFormText className="help-block">{attention}</CFormText>
        </>
      )}
    </div>
  )
}

FormField.propTypes = {
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  setFieldValue: PropTypes.func,
  preview: PropTypes.any,
  attention: PropTypes.string,
  isRequired: PropTypes.bool,
}

export default FormField