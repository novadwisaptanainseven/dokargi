import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getDiagnosa = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`diagnosa`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_diagnosa,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getDiagnosa
