import React from 'react'
import DataTable from 'react-data-table-component'
import { NoDataIlustration } from 'src/assets'
import PropTypes from 'prop-types'

const MyDataTable = ({ mainData, filteredData, columns, expandedComponent }) => {
  // Custom Styles
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#ddd',
      },
    },
    headCells: {
      style: {
        fontSize: '1.3em', // Change text size in head cells
      },
    },
    cells: {
      style: {
        fontSize: '1.1em', // Change text size in body cells
      },
    },
  }

  return (
    <>
      {/* Datatable */}
      {mainData && filteredData.length === 0 ? (
        <div className="w-100 d-flex flex-column align-items-center gap-3 mt-5">
          <img width={200} src={NoDataIlustration} alt="no-data-ilustration" />
          <h3 style={{ color: '#6C63FF' }}>Data Tidak Ditemukan</h3>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={filteredData}
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={expandedComponent}
          customStyles={customStyles}
          highlightOnHover
        />
      )}
    </>
  )
}

MyDataTable.propTypes = {
  mainData: PropTypes.array,
  filteredData: PropTypes.array,
  columns: PropTypes.array,
  expandedComponent: PropTypes.node,
}

export default MyDataTable
