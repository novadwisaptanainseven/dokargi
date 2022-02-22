import axiosInstance from 'src/helpers/axios'

export const checkToken = (Swal) => {
  axiosInstance
    .get(`${localStorage.baseURL}ceklogin`)
    .then((res) => {
      Swal.fire({
        icon: 'error',
        title: 'Akses Dilarang',
        text: 'Anda harus logout terlebih dahulu!',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/admin'
        }
      })
    })
    .catch((err) => {
      // console.log(err.response.data)
    })
}
