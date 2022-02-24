import { CSpinner } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'

const LoadingComponent = ({ className = '' }) => {
  return (
    <div className={className}>
      <CSpinner color="primary" />
    </div>
  )
}

LoadingComponent.propTypes = {
  className: PropTypes.string,
}

export default LoadingComponent
