import React from 'react'
import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { logout } from 'src/context/actions/Auth'

const Swal = withReactContent(swal2)

// Fungsi untuk alert logout
const handleLogout = (e) => {
  e.preventDefault()

  Swal.fire({
    icon: 'warning',
    title: 'Logout',
    text: 'Anda yakin ingin logout ?',
    confirmButtonText: 'YA',
    showCancelButton: true,
    cancelButtonText: 'TIDAK',
  }).then((result) => {
    if (result.isConfirmed) {
      logout(Swal)
    }
  })
}

export default handleLogout
