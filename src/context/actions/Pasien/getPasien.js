import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getPasien = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`pasien`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_pasien,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getPasien
