import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import { SampleGambar } from 'src/assets'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft, cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete } from 'src/components/AlertMessages'

const Solusi = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url, params } = match

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

  // Go back to parent page
  const goBackToParentPage = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const columns = [
    {
      name: 'Solusi',
      selector: (row) => row.solusi,
      sortable: true,
      width: '800px',
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
            <CButton size="sm" color="danger">
              <CIcon
                className="text-white"
                icon={cilTrash}
                onClick={() => handleDelete(row.id_penyakit)}
              />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = [
    {
      solusi:
        'Aorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
    {
      solusi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
    {
      solusi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
    {
      solusi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
    {
      solusi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
    {
      solusi:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
    },
  ]

  const filteredData = data.filter((item) =>
    item.solusi.toLowerCase().includes(filterText.toLowerCase()),
  )

  const ExpandedComponent = ({ data }) => (
    <>
      <div className="px-3 pt-2">
        <table className="w-100">
          <tbody>
            <tr valign="top">
              <th width={130}>Solusi</th>
              <td>{data.solusi}</td>
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
          <h3 className="d-flex align-items-center gap-3">
            <a href="." onClick={(e) => goBackToParentPage(e)}>
              <CIcon icon={cilArrowLeft} size="xl" />
            </a>
            <span>Data Solusi untuk Penyakit {params.id}</span>
          </h3>
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

export default Solusi
