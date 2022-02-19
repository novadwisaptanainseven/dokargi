import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'
import { SampleGambar } from 'src/assets'
import { format } from 'date-fns'

const RiwayatDiagnosa = () => {
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

  // Go To Detail Page
  const handleDetailButton = (id) => {
    history.push(`${url}/detail/${id}`)
  }

  const columns = [
    {
      name: 'Kode',
      selector: (row) => row.id_diagnosa,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Pasien',
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: 'Tgl Diagnosa',
      selector: (row) => format(new Date(row.waktu_buat), 'dd-MM-y'),
      sortable: true,
    },
    {
      name: 'Jam Diagnosa',
      selector: (row) => format(new Date(row.waktu_buat), 'HH:mm'),
      sortable: true,
    },
    {
      name: 'Hasil Diagnosa',
      selector: (row) => row.nm_penyakit,
      sortable: true,
    },
    {
      name: 'CF',
      selector: (row) => row.hasil_nilai_cf,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Aksi',
      width: '125px',
      cell: (row) => (
        <>
          <CButtonGroup className="table-button">
            <CButton size="sm" color="info" onClick={() => handleDetailButton(row.id_diagnosa)}>
              <CIcon className="text-white" icon={cilInfo} />
            </CButton>
            {/* <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_diagnosa)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton> */}
            <CButton size="sm" color="danger" onClick={() => handleDelete(row.id_diagnosa)}>
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = [
    {
      id_diagnosa: 'DK0001',
      nama: 'Nova Dwi Sapta',
      nm_penyakit: 'Karies Media',
      hasil_nilai_cf: 1,
      waktu_buat: '2022-02-13 18:33:56',
    },
    {
      id_diagnosa: 'DK0002',
      nama: 'Nova Dwi Sapta',
      nm_penyakit: 'Karies Media',
      hasil_nilai_cf: 1,
      waktu_buat: '2022-02-13 18:33:56',
    },
  ]

  const filteredData = data.filter(
    (item) =>
      item.nm_penyakit.toLowerCase().includes(filterText.toLowerCase()) ||
      item.id_diagnosa.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nama.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={180}>Kode</th>
              <td>{data.id_diagnosa}</td>
            </tr>
            <tr valign="top">
              <th>Pasien</th>
              <td>{data.nama}</td>
            </tr>
            <tr valign="top">
              <th>Tgl Diagnosa</th>
              <td>{format(new Date(data.waktu_buat), 'dd-MM-y')}</td>
            </tr>
            <tr valign="top">
              <th>Jam Diagnosa</th>
              <td>{format(new Date(data.waktu_buat), 'HH:mm')}</td>
            </tr>
            <tr valign="top">
              <th>Hasil Diagnosa</th>
              <td>{data.nm_penyakit}</td>
            </tr>
            <tr valign="top">
              <th>Nilai CF</th>
              <td>{data.hasil_nilai_cf}</td>
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
          <h3>Riwayat Diagnosa</h3>
        </CCardHeader>
        <CCardBody className="pb-5">
          {/* Table Control */}
          <TableControl
            handleFilter={handleFilter}
            handleFilterReset={handleFilterReset}
            filterText={filterText}
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

export default RiwayatDiagnosa
