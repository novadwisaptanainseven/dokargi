import React from 'react'

import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(swal2)

const handleDelete2 = (id, id2, deleteData, setData) => {
  Swal.fire({
    icon: 'warning',
    title: 'Anda yakin ingin menghapus data ini ?',
    text: 'Jika yakin, klik YA',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'YA',
    cancelButtonText: 'Batal',
  }).then((res) => {
    if (res.isConfirmed) {
      deleteData(id, id2, setData, Swal)
    }
  })
}

export default handleDelete2
