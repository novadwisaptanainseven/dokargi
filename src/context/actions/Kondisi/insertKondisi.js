import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getKondisi } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertKondisi = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`kondisi/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'data-master/kondisi', history)
      getKondisi(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertKondisi
