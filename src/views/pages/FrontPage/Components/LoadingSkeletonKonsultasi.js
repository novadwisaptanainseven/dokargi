import { CRow, CCol } from '@coreui/react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeletonKonsultasi = () => {
  return (
    <div className="">
      <CRow>
        <CCol md="3">
          <Skeleton count={5} height={30} className="mb-1" />
        </CCol>
        <CCol md="9">
          <Skeleton count={5} height={30} className="mb-1" />
        </CCol>
      </CRow>
    </div>
  )
}

export default LoadingSkeletonKonsultasi
