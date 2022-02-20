import axiosInstance from 'src/helpers/axios'
import { baseUrlImg } from 'src/helpers/url'
import { LOADING, SUCCESS } from '../actionTypes'

const getKonten = (dispatch) => {
  dispatch({
    type: LOADING,
  })
  const logoApp = document.getElementById('logoApp')

  axiosInstance
    .get(`konten`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
      // console.log(res.data);
      document.title = res.data.title_website
      logoApp.setAttribute('href', baseUrlImg + res.data.logo)
      // console.log(logoApp);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getKonten
