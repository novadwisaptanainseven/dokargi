import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getKondisi = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`kondisi`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_kondisi,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getKondisi
