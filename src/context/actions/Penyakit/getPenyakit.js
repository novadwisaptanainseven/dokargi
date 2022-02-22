import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getPenyakit = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`penyakit`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_penyakit,
      })
      console.log(res.data.data_penyakit)
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getPenyakit
