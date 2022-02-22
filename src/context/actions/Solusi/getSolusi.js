import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getSolusi = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`solusi`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_solusi,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getSolusi
