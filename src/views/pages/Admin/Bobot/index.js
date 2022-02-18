import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { SampleGambar } from 'src/assets'

const Bobot = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match

  // Go To Insert Page
  const handleInsertButton = () => {
    history.push(`${url}/tambah`)
  }

  // Go To Edit Page
  const handleEditButton = (id) => {
    history.push(`${url}/edit/${id}`)
  }

  const columns = [
    {
      name: 'Kode',
      selector: (row) => row.id_bobot,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Penyakit',
      selector: (row) => row.nm_penyakit,
      sortable: true,
    },
    {
      name: 'Gejala',
      selector: (row) => row.nm_gejala,
      sortable: true,
    },
    {
      name: 'MB',
      selector: (row) => row.nilai_mb,
      sortable: true,
      width: '100px',
    },
    {
      name: 'MD',
      selector: (row) => row.nilai_md,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Aksi',
      width: '125px',
      cell: (row) => (
        <>
          <CButtonGroup className="table-button">
            {/* <CButton size="sm" color="info">
              <CIcon className="text-white" icon={cilInfo} />
            </CButton> */}
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_bobot)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton size="sm" color="danger" onClick={() => handleDelete(row.id_bobot)}>
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = [
    {
      id_bobot: 'BK0001',
      nm_penyakit: 'Karies Media',
      nm_gejala: 'Adanya plak pada permukaan gigi',
      nilai_mb: 0.6,
      nilai_md: 0.2,
    },
    {
      id_bobot: 'BK0002',
      nm_penyakit: 'Karies Superficialis',
      nm_gejala: 'Kedalaman lubang gigi kecil',
      nilai_mb: 0.4,
      nilai_md: 0.7,
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.nm_penyakit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.id_bobot.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nm_gejala.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Kode</th>
              <td>{data.id_bobot}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Penyakit</th>
              <td>{data.nm_penyakit}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Gejala</th>
              <td>{data.nm_gejala}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Nilai MB</th>
              <td>{data.nilai_mb}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Nilai MD</th>
              <td>{data.nilai_md}</td>
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
          <h3>Bobot</h3>
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

export default Bobot
