import { messageErrorKonsultasi, messageSuccessKonsultasi } from 'src/helpers/messages'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'
import { ERROR, LOADING, SUCCESS } from 'src/context/actionTypes'

const insertDiagnosa = (idPasien, values, history, dispatch) => {
  dispatch({
    type: LOADING,
  })

  axiosInstance
    .post(`diagnosa/insert/${idPasien}`, values)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data,
      })
      showAlertSuccess(
        messageSuccessKonsultasi,
        `konsultasi/hasil/${res.data.id_diagnosa}`,
        history,
        '',
        '',
        false,
      )
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
      })
      showAlertError(err.response.data, messageErrorKonsultasi)
      // console.log(err.response.data);
    })
}

export default insertDiagnosa
