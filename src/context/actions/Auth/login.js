import axiosInstance from 'src/helpers/axios'
import { baseRoutePath } from 'src/helpers/url'
import { ERROR, LOADING, SUCCESS } from '../../actionTypes'

const login = (values, dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .post('login', values)
    .then((res) => {
      localStorage.token = res.data.token
      localStorage.level = res.data.level
      localStorage.id_user = res.data.id_user
      localStorage.loginTimestamp = new Date().getTime() + 2 * 60 * 60 * 1000 // Durasi login = 1 jam
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })

      // Redirect to dashboard
      window.location.href = baseRoutePath + 'admin'

      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.pesan,
      })
      // console.log(err.response.data);
    })
}

export default login
