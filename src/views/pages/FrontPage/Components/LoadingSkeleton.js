import { CRow, CCol, CCard, CCardBody, CCardText, CCardTitle, CCardFooter } from '@coreui/react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'

const LoadingSkeleton = ({ count = 3 }) => {
  return (
    <CRow>
      {Array.from(new Array(count)).map((item, idx) => (
        <CCol key={(item, idx)} md="4" className="mb-3">
          <CCard className="card border-0">
            <Skeleton height={200} style={{ lineHeight: 2 }} />
            <CCardBody className="p-4">
              <Skeleton />
              <CCardTitle className="mt-3 mb-3">
                <Skeleton />
              </CCardTitle>
              <CCardText className="card-text">
                <Skeleton count={4} />
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}

export default LoadingSkeleton

LoadingSkeleton.propTypes = {
  count: PropTypes.number,
}
