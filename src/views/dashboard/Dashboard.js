import React from 'react'

import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChartPie } from '@coreui/icons'

const Dashboard = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="display-3">DOKARGI (Dokter Karies Gigi)</h1>
        <p>
          DOKARGI merupakan aplikasi sistem pakar untuk mendiagnosa penyakit Karies Gigi dengan
          menggunakan metode Certainty Vector
        </p>
      </div>

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
