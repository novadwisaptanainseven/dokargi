import React, { useState, useEffect, useContext } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilPen, cilTrash } from '@coreui/icons'
import { LoadingComponent, MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { format } from 'date-fns'
import { GlobalContext } from 'src/context/Provider'
import { deletePasien, getPasien } from 'src/context/actions/Pasien'

const Pasien = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url } = match
  const { pasienState, pasienDispatch } = useContext(GlobalContext)
  const { data: dataPasien, loading } = pasienState

  // Get data pasien
  useEffect(() => {
    getPasien(pasienDispatch)
  }, [pasienDispatch])

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
      selector: (row) => row.id_pasien,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Nama Pasien',
      selector: (row) => row.nama,
      sortable: true,
      // width: '230px',
      maxWidth: '750px',
    },
    {
      name: 'TTL',
      selector: (row) => `${row.tmpt_lahir}, ${format(new Date(row.tgl_lahir), 'dd-MM-y')}`,
      sortable: true,
      // width: '230px',
      maxWidth: '750px',
    },
    {
      name: 'Alamat',
      selector: (row) => row.alamat,
      sortable: true,
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
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_pasien)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => handleDelete(row.id_pasien, deletePasien, pasienDispatch)}
            >
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !dataPasien
    ? []
    : dataPasien.map((item) => ({
        id_pasien: item.id_pasien,
        nama: item.nama,
        tmpt_lahir: item.tmpt_lahir,
        tgl_lahir: item.tgl_lahir,
        jkel: item.jkel,
        alamat: item.alamat,
        ip: item.ip,
      }))

  const dataDummy = [
    {
      id_pasien: 'GJ0001',
      nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      tmpt_lahir: 'Tanjung Redeb',
      tgl_lahir: '1997-11-27',
      jkel: 1,
      alamat: 'Jalan Slamet Riyadi Gg. Hikmah, RT. 05, No. 08',
      ip: '::1',
    },
    {
      id_pasien: 'GJ0002',
      nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      tmpt_lahir: 'Tanjung Redeb',
      tgl_lahir: '1997-11-27',
      jkel: 1,
      alamat: 'Jalan Slamet Riyadi Gg. Hikmah, RT. 05, No. 08',
      ip: '::1',
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.id_pasien.toLowerCase().includes(filterText.toLowerCase()) ||
      item.tmpt_lahir.toLowerCase().includes(filterText.toLowerCase()) ||
      item.alamat.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nama.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Kode</th>
              <td>{data.id_pasien}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Pasien</th>
              <td>{data.nama}</td>
            </tr>
            <tr valign="top">
              <th width={130}>TTL</th>
              <td>{`${data.tmpt_lahir}, ${format(new Date(data.tgl_lahir), 'dd-MM-y')}`}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Jenis Kelamin</th>
              <td>{data.jkel}</td>
            </tr>
            <tr valign="top">
              <th width={130}>Alamat</th>
              <td>{data.alamat}</td>
            </tr>
            <tr valign="top">
              <th width={130}>IP Address</th>
              <td>{data.ip}</td>
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
      {!dataPasien && loading && <LoadingComponent />}

      {dataPasien && (
        <CCard>
          <CCardHeader>
            <h3>Pasien</h3>
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

export default Pasien
