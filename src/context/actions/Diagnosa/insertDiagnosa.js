import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getDiagnosa } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertDiagnosa = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`diagnosa/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'diagnosa', history)
      getDiagnosa(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertDiagnosa
