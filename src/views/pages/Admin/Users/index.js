import React, { useState, useEffect, useContext } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { GlobalContext } from 'src/context/Provider'
import { getUsers, deleteUsers } from 'src/context/actions/Users'
import { LoadingComponent } from 'src/components'
import getImage from 'src/context/actions/Files/getImage'

const Users = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { usersState, usersDispatch } = useContext(GlobalContext)
  const { data: dataUsers, loading } = usersState

  // Get data users
  useEffect(() => {
    getUsers(usersDispatch)
  }, [usersDispatch])

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
          <a href={getImage('foto_pengguna', row.foto)} target="_blank" rel="noreferrer">
            <img
              className="img-thumbnail"
              width={100}
              src={getImage('foto_pengguna', row.foto)}
              alt="gambar-penyakit"
            />
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
            {localStorage.id_user != row.id_user && (
              <CButton
                size="sm"
                color="danger"
                onClick={() => handleDelete(row.id_user, deleteUsers, usersDispatch)}
              >
                <CIcon className="text-white" icon={cilTrash} />
              </CButton>
            )}
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !dataUsers
    ? []
    : dataUsers.map((item) => ({
        id_user: item.id_user,
        username: item.username,
        password: item.password,
        nama: item.nama,
        level: item.level,
        foto: item.foto,
        id_pembuat: item.id_pembuat,
        waktu_buat: item.waktu_buat,
        id_penggubah: item.id_penggubah,
        waktu_ubah: item.waktu_ubah,
      }))

  // const dataDummy = [
  //   {
  //     id_user: 1,
  //     username: 'admin',
  //     nama: 'Administrator',
  //   },
  //   {
  //     id_user: 2,
  //     username: 'admin2',
  //     nama: 'Administrator 2',
  //   },
  // ]

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
                <a href={getImage('foto_pengguna', data.foto)} target="_blank" rel="noreferrer">
                  <img
                    width={300}
                    src={getImage('foto_pengguna', data.foto)}
                    alt="gambar-penyakit"
                  />
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
      {/* Loading Component */}
      {!dataUsers && loading && <LoadingComponent />}

      {dataUsers && (
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
      )}
    </>
  )
}

export default Users
