import axiosInstance from 'src/helpers/axios'

const logout = (Swal) => {
  axiosInstance
    .post(`logout`)
    .then((res) => {
      // console.log(res.data);
      Swal.fire('Anda berhasil Logout', '', 'success').then((res) => {
        localStorage.clear()
        window.location.href = '/login'
      })
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default logout
