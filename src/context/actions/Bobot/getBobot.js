import axiosInstance from 'src/helpers/axios'
import { LOADING, SUCCESS } from '../../actionTypes'

const getBobot = (dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`bobot`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_bobot,
      })
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getBobot
