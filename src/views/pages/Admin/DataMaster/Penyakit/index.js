import React, { useMemo, useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CFormInput,
  CButtonGroup,
} from '@coreui/react'

import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'
import { SampleGambar } from 'src/assets'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilPen, cilTrash } from '@coreui/icons'

const Penyakit = () => {
  const [filterText, setFilterText] = useState('')

  const columns = [
    {
      name: 'Kode',
      selector: (row) => row.id_penyakit,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Nama Penyakit',
      selector: (row) => row.nm_penyakit,
      sortable: true,
      width: '230px',
    },
    {
      name: 'Deskripsi',
      selector: (row) => row.deskripsi,
      sortable: true,
      width: '400px',
    },
    {
      name: 'Gambar',
      cell: (row) => (
        <>
          <div className="p-2">
            <a href={SampleGambar} target="_blank" rel="noreferrer">
              <img className="img-thumbnail" width={100} src={SampleGambar} alt="gambar-penyakit" />
            </a>
          </div>
        </>
      ),
    },
    {
      name: 'Aksi',
      cell: (row) => (
        <>
          <CButtonGroup className="table-button">
            <CButton size="sm" color="info">
              <CIcon className="text-white" icon={cilInfo} />
            </CButton>
            <CButton size="sm" color="success">
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton size="sm" color="danger">
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = [
    {
      id_penyakit: 'PK0001',
      nm_penyakit: 'Karies Gigi Superfilis',
      deskripsi:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempore quas, cumque delectus porro illo recusandae suscipit incidunt id dolore.',
    },
    {
      id_penyakit: 'PK0002',
      nm_penyakit: 'Karies Gigi Media',
      deskripsi:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempore quas, cumque delectus porro illo recusandae suscipit incidunt id dolore.',
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.id_penyakit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nm_penyakit.toLowerCase().includes(filterText.toLowerCase()),
  )

  // Custom Styles
  const customStyles = {
    headCells: {
      style: {
        fontSize: '1.3em', // Change text size in head cells
      },
    },
    cells: {
      style: {
        fontSize: '1.1em', // Change text size in body cells
      },
    },
  }

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Kode</th>
              <td>{data.id_penyakit}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Penyakit</th>
              <td>{data.nm_penyakit}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Deskripsi</th>
              <td>{data.deskripsi}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Gambar</th>
              <td className="py-2">
                <a href={SampleGambar} target="_blank" rel="noreferrer">
                  <img width={300} src={SampleGambar} alt="gambar-penyakit" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
  // Props validation
  ExpandedComponent.propTypes = {
    data: PropTypes.object,
  }

  const handleFilter = (e) => {
    const val = e.target.value
    setFilterText(val)
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Penyakit</h3>
        </CCardHeader>
        <CCardBody>
          <div className="table-control mb-3 d-sm-block d-md-flex justify-content-between">
            <CButton color="primary btn-tambah">Tambah</CButton>
            <CFormInput
              className="input-pencarian"
              type="text"
              name="pencarian"
              placeholder="Pencarian..."
              aria-label="Pencarian"
              onChange={(e) => handleFilter(e)}
            />
          </div>

          {/* Datatable */}
          <DataTable
            columns={columns}
            data={filteredData}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={ExpandedComponent}
            customStyles={customStyles}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Penyakit
