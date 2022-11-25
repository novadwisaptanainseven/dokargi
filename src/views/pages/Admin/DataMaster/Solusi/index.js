import React, { useState, useEffect } from 'react'
import { CCard, CCardHeader, CCardBody, CButton, CButtonGroup } from '@coreui/react'

import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft, cilPen, cilTrash } from '@coreui/icons'
import { MyDataTable, TableControl } from 'src/components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { handleDelete2 } from 'src/components/AlertMessages'
import { deleteSolusi, getSolusiByIdPenyakit } from 'src/context/actions/Solusi'
import { LoadingComponent } from 'src/components/'

const Solusi = () => {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()
  const match = useRouteMatch()
  const { url, params } = match
  const [solusi, setSolusi] = useState('')

  // Get data solusi by id penyakit
  useEffect(() => {
    getSolusiByIdPenyakit(params.id, setSolusi)
  }, [params])

  // Go To Insert Page
  const handleInsertButton = () => {
    history.push(`${url}/tambah`)
  }

  // Go To Edit Page
  const handleEditButton = (id) => {
    history.push(`${url}/edit/${id}`)
  }

  // Go back to parent page
  const goBackToParentPage = (e) => {
    e.preventDefault()
    history.push('/dokargi/admin/data-master/penyakit')
  }

  const columns = [
    {
      name: 'Solusi',
      selector: (row) => row.solusi,
      sortable: true,
      maxWidth: '800px',
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
            <CButton size="sm" color="success" onClick={() => handleEditButton(row.id_solusi)}>
              <CIcon className="text-white" icon={cilPen} />
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => handleDelete2(params.id, row.id_solusi, deleteSolusi, setSolusi)}
            >
              <CIcon className="text-white" icon={cilTrash} />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ]

  const data = !solusi
    ? []
    : solusi.map((item) => ({
        id_solusi: item.id_solusi,
        solusi: item.solusi,
      }))

  // const dataDummy = [
  //   {
  //     id_solusi: 1,
  //     solusi:
  //       'Aorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  //   {
  //     id_solusi: 2,
  //     solusi:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  //   {
  //     id_solusi: 3,
  //     solusi:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  //   {
  //     id_solusi: 4,
  //     solusi:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  //   {
  //     id_solusi: 5,
  //     solusi:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  //   {
  //     id_solusi: 6,
  //     solusi:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi autem repudiandae iusto facere doloremque cum voluptates sunt, cumque officia blanditiis pariatur laudantium quia recusandae sapiente quasi. Nulla, accusantium! Amet.',
  //   },
  // ]

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
      {/* Loading Spinner */}
      {!solusi ? (
        <LoadingComponent />
      ) : (
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
      )}
    </>
  )
}

export default Solusi
