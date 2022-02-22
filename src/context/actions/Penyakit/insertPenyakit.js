import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getPenyakit } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertPenyakit = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`penyakit/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'data-master/penyakit', history)
      getPenyakit(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertPenyakit
