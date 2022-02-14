import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsF,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilChartPie,
} from '@coreui/icons'

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Penyakit"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Gejala"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="solusi"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Pasien"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="success"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Riwayat Diagnosa"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="secondary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Users"
            value="10"
          />
        </CCol>
        <CCol xs={6} md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="dark"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Bobot"
            value="10"
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
