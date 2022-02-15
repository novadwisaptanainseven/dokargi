import React from 'react'
import { CButton, CInputGroup, CFormInput } from '@coreui/react'
import PropTypes from 'prop-types'

const TableControl = ({ handleInsertButton, handleFilter, filterText, handleFilterReset }) => {
  return (
    <div className="table-control mb-3 d-sm-block d-md-flex justify-content-between">
      <CButton color="primary btn-tambah" onClick={handleInsertButton}>
        Tambah
      </CButton>
      <CInputGroup className="input-pencarian">
        <CFormInput
          type="text"
          name="pencarian"
          placeholder="Pencarian..."
          aria-label="Pencarian"
          onChange={(e) => handleFilter(e)}
          value={filterText}
        />
        <CButton type="button" color="dark" variant="outline" onClick={handleFilterReset}>
          Reset
        </CButton>
      </CInputGroup>
    </div>
  )
}

// Props validation
TableControl.propTypes = {
  data: PropTypes.object,
  handleFilterReset: PropTypes.func,
  handleFilter: PropTypes.func,
  handleInsertButton: PropTypes.func,
  filterText: PropTypes.string,
}

export default TableControl
