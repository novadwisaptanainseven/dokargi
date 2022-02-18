import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { SampleGambar } from 'src/assets'

const Users = () => {
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
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Nama User',
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: 'Foto',
      width: '200px',
      cell: (row) => (
        <div className="p-2">
          <a href={SampleGambar} target="_blank" rel="noreferrer">
            <img className="img-thumbnail" width={100} src={SampleGambar} alt="gambar-penyakit" />
          </a>
        </div>
      ),
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
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_user)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton size="sm" color="danger" onClick={() => handleDelete(row.id_user)}>
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = [
    {
      id_user: 1,
      username: 'admin',
      nama: 'Administrator',
    },
    {
      id_user: 2,
      username: 'admin2',
      nama: 'Administrator 2',
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
      item.username.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Username</th>
              <td>{data.username}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Nama</th>
              <td>{data.nama}</td>
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
          <h3>Users</h3>
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

export default Users
