import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import { SampleGambar } from 'src/assets'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'

const Penyakit = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match

  // Go To Insert Page
  const handleInsertButton = () => {
    history.push(`${url}/tambah`)
  }

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
      name: 'Solusi',
      cell: (row) => (
        <div>
          <CButton type="button" color="secondary">
            Lihat
          </CButton>
        </div>
      ),
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
      width: '125px',
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

  const handleFilterReset = () => {
    setFilterText('')
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Penyakit</h3>
        </CCardHeader>
        <CCardBody className="pb-5">
          {/* Table Control */}
          <TableControl
            handleFilter={handleFilter}
            handleFilterReset={handleFilterReset}
            filterText={filterText}
            handleInsertButton={handleInsertButton}
          />
          {/* Datatable Custom */}
          <MyDataTable
            mainData={data}
            filteredData={filteredData}
            expandedComponent={ExpandedComponent}
            columns={columns}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Penyakit
