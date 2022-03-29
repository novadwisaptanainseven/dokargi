import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeletonHasilDiagnosa = () => {
  return (
    <div className="container">
      {/* Link back */}
      <Skeleton className="skeleton-penyakit-back mb-3 skeleton-penyakit-back" />

      {/* Judul */}
      <div className="d-md-flex justify-content-between mb-3">
        <Skeleton className="skeleton-diagnosa-judul" />
        <Skeleton className="skeleton-diagnosa-print" />
      </div>

      <Skeleton count={5} />

      <Skeleton height={300} className="mt-3" />

      <div className="mt-3">
        <Skeleton count={5} />
      </div>

      <div className="mt-3">
        <Skeleton count={5} />
      </div>
    </div>
  )
}

export default LoadingSkeletonHasilDiagnosa
