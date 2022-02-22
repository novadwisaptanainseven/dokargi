import React, { useContext, useEffect } from 'react'

import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChartPie } from '@coreui/icons'
import { GlobalContext } from 'src/context/Provider'
import { getDashboard } from 'src/context/actions/Dashboard'

const Dashboard = () => {
  const { kontenState, dashboardState, dashboardDispatch } = useContext(GlobalContext)
  const { data: dataKonten } = kontenState
  const { data: dataDashboard } = dashboardState

  // Get data dashboard
  useEffect(() => getDashboard(dashboardDispatch), [dashboardDispatch])

  return (
    <>
      <div className="mb-4">
        <h1 className="display-3">{dataKonten?.title_website || ''}</h1>
        <p>{dataKonten?.deskripsi_aplikasi || ''}</p>
      </div>

      <CRow>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Penyakit"
            value={dataDashboard?.jumlah_penyakit || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Gejala"
            value={dataDashboard?.jumlah_gejala || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="solusi"
            value={dataDashboard?.jumlah_solusi || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Pasien"
            value={dataDashboard?.jumlah_pasien || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="success"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Riwayat Diagnosa"
            value={dataDashboard?.jumlah_diagnosa || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="secondary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Users"
            value={dataDashboard?.jumlah_pengguna || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="dark"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Bobot"
            value={dataDashboard?.jumlah_bobot || 0}
          />
        </CCol>
        <CCol md={4}>
          <CWidgetStatsF
            className="mb-3"
            color="dark"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Solusi"
            value={dataDashboard?.jumlah_solusi || 0}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
