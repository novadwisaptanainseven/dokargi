import axiosInstance from 'src/helpers/axios'
import { baseRoutePath } from 'src/helpers/url'
import { SUCCESS } from '../../actionTypes'

const checkSession = (history, Swal, setIsLogin, profileUserDispatch) => {
  axiosInstance
    .get(`${localStorage.baseURL}ceklogin`)
    .then((res) => {
      // console.log(res.data);
      setIsLogin(true)
      profileUserDispatch({
        type: SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Akses Dilarang',
        text: 'Anda belum login!',
        showConfirmButton: true,
      }).then((result) => {
        history.push(`${baseRoutePath}login`)
      })
    })
}

export default checkSession
