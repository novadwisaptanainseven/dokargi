import React, { useState, useContext, useEffect } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { LoadingComponent, MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { GlobalContext } from 'src/context/Provider'
import { deleteGejala, getGejala } from 'src/context/actions/Gejala'

const Gejala = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { gejalaState, gejalaDispatch } = useContext(GlobalContext)
  const { data: dataGejala, loading } = gejalaState

  // Get data gejala
  useEffect(() => getGejala(gejalaDispatch), [gejalaDispatch])

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
      selector: (row) => row.id_gejala,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Nama Gejala',
      selector: (row) => row.nm_gejala,
      sortable: true,
      // width: '230px',
      maxWidth: '750px',
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
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_gejala)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => handleDelete(row.id_gejala, deleteGejala, gejalaDispatch)}
            >
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !dataGejala
    ? []
    : dataGejala.map((item) => ({
        id_gejala: item.id_gejala,
        nm_gejala: item.nm_gejala,
      }))

  const dataDummy = [
    {
      id_gejala: 'GJ0001',
      nm_gejala: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    {
      id_gejala: 'GJ0002',
      nm_gejala: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.id_gejala.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nm_gejala.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Kode</th>
              <td>{data.id_gejala}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Gejala</th>
              <td>{data.nm_gejala}</td>
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
      {!dataGejala && loading && <LoadingComponent />}

      {dataGejala && (
        <CCard>
          <CCardHeader>
            <h3>Gejala</h3>
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

export default Gejala
