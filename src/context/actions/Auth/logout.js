import axiosInstance from 'src/helpers/axios'
import { baseRoutePath } from 'src/helpers/url'

const logout = (Swal) => {
  axiosInstance
    .post(`logout`)
    .then((res) => {
      // console.log(res.data);
      Swal.fire('Anda berhasil Logout', '', 'success').then((res) => {
        localStorage.clear()
        window.location.href = baseRoutePath + 'admin/login'
      })
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default logout
