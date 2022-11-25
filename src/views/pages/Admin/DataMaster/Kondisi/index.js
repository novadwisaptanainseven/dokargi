import React, { useState, useContext, useEffect } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { LoadingComponent, MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { GlobalContext } from 'src/context/Provider'
import { deleteKondisi, getKondisi } from 'src/context/actions/Kondisi'

const Kondisi = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { kondisiState, kondisiDispatch } = useContext(GlobalContext)
  const { data: dataKondisi, loading } = kondisiState

  // Get data kondisi
  useEffect(() => getKondisi(kondisiDispatch), [kondisiDispatch])

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
      selector: (row) => row.id_kondisi,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Nama Kondisi',
      selector: (row) => row.nm_kondisi,
      sortable: true,
      maxWidth: '750px',
    },
    {
      name: 'Bobot',
      selector: (row) => row.bobot,
      sortable: true,
      width: '230px',
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
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_kondisi)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => handleDelete(row.id_kondisi, deleteKondisi, kondisiDispatch)}
            >
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !dataKondisi
    ? []
    : dataKondisi.map((item) => ({
        id_kondisi: item.id_kondisi,
        nm_kondisi: item.nm_kondisi,
        bobot: item.bobot,
      }))

  const filteredData = data.filter(
    (item) =>
      item.id_kondisi.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nm_kondisi.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nm_kondisi.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Kode</th>
              <td>{data.id_kondisi}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Kondisi</th>
              <td>{data.nm_kondisi}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Bobot</th>
              <td>{data.bobot}</td>
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
      {/* Loading Spinner */}
      {!dataKondisi && loading && <LoadingComponent />}

      {dataKondisi && (
        <CCard>
          <CCardHeader>
            <h3>Kondisi</h3>
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

export default Kondisi
