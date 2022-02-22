import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getGejala = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`gejala`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_gejala,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getGejala
