import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeletonPenyakit = () => {
  return (
    <div className="container">
      {/* Link back */}
      <Skeleton className="skeleton-penyakit-back mb-3" />

      {/* Judul */}
      <Skeleton height={50} className="mb-3" />

      {/* Sub Judul */}
      <Skeleton className="skeleton-penyakit-subjudul mb-3" />

      {/* Image */}
      <Skeleton className="skeleton-penyakit-gambar mb-3" />

      {/* Description */}
      <Skeleton count={10} />
    </div>
  )
}

export default LoadingSkeletonPenyakit
