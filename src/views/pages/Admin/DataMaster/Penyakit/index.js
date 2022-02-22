import React, { useState, useContext, useEffect, useMemo } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import { SampleGambar } from 'src/assets'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { LoadingComponent, MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { GlobalContext } from 'src/context/Provider'
import { deletePenyakit, getPenyakit } from 'src/context/actions/Penyakit'
import getImage from 'src/context/actions/Files/getImage'

const Penyakit = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { penyakitState, penyakitDispatch } = useContext(GlobalContext)
  const { data: dataPenyakit, loading } = penyakitState

  // Get data penyakit
  useEffect(() => getPenyakit(penyakitDispatch), [penyakitDispatch])

  // Go To Insert Page
  const handleInsertButton = () => {
    history.push(`${url}/tambah`)
  }

  // Go To Edit Page
  const handleEditButton = (id) => {
    history.push(`${url}/edit/${id}`)
  }

  // Go To Solusi Page
  const handleSolusiButton = (id) => {
    history.push(`${url}/${id}/solusi`)
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
          <CButton
            type="button"
            color="secondary"
            onClick={() => handleSolusiButton(row.id_penyakit)}
          >
            Lihat
          </CButton>
        </div>
      ),
    },
    {
      name: 'Gambar',
      width: '200px',
      cell: (row) => (
        <>
          <div className="p-2">
            <a href={getImage('foto_penyakit', row.gambar)} target="_blank" rel="noreferrer">
              <img
                className="img-thumbnail"
                width={100}
                src={getImage('foto_penyakit', row.gambar)}
                alt={getImage('foto_penyakit', row.gambar)}
              />
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
            {/* <CButton size="sm" color="info">
              <CIcon className="text-white" icon={cilInfo} />
            </CButton> */}
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_penyakit)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => handleDelete(row.id_penyakit, deletePenyakit, penyakitDispatch)}
            >
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !dataPenyakit
    ? []
    : dataPenyakit.map((item) => ({
        id_penyakit: item.id_penyakit,
        nm_penyakit: item.nm_penyakit,
        deskripsi: item.deskripsi,
        gambar: item.gambar,
      }))

  const data2 = [
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
                <a href={getImage('foto_penyakit', data.gambar)} target="_blank" rel="noreferrer">
                  <img
                    width={300}
                    src={getImage('foto_penyakit', data.gambar)}
                    alt={getImage('foto_penyakit', data.gambar)}
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
      {/* Loading Spinner */}
      {!dataPenyakit && loading ? (
        <LoadingComponent />
      ) : (
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
      )}
    </>
  )
}

export default Penyakit
