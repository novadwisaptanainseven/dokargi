import { ERROR, LOADING, SUCCESS } from 'src/context/actionTypes'
import axiosInstance from 'src/helpers/axios'

const getPenyakitBySlug = (slug, dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .get(`penyakit/detail_slug/${slug}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data_penyakit,
      })
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.pesan,
      })
    })
}

export default getPenyakitBySlug
