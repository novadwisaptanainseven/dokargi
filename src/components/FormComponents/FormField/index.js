import { CFormInput, CFormLabel, CFormSelect, CFormText, CFormTextarea } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'
import SelectData from 'react-select'

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
  options,
  disabled,
  defaultValue = null,
}) => {
  // Custom styles for select data
  const customStyles = (error) => ({
    control: (provided, state) => ({
      ...provided,
      border: error ? '1px solid #dc3545' : provided.border,
    }),
  })

  return (
    <div className="mb-3">
      {/* If input type is text */}
      {(type === 'text' || type === 'password' || type === 'number') && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormInput
            type={type}
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
            type={type}
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

      {/* If input type is date */}
      {type === 'date' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormInput
            type={type}
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

      {/* If input type is select */}
      {type === 'select' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <CFormSelect
            name={name}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
            options={options}
            className={error ? 'is-invalid' : null}
          />
          {error && <div className="invalid-feedback">{errorMessage}</div>}
        </>
      )}

      {/* If input type is select data and default value doesn't exist */}
      {type === 'selectdata' && (
        <>
          <CFormLabel htmlFor={name}>{label}</CFormLabel>
          <SelectData
            styles={customStyles(error)}
            inputId={name}
            name={name}
            options={options}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            isClearable
            isDisabled={disabled}
            {...(defaultValue && { defaultValue: defaultValue })}
          />
          {error && <div className="text-danger">{errorMessage}</div>}
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
  options: PropTypes.array,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.object,
}

export default FormField
