import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getUsers = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`pengguna`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_pengguna,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getUsers
