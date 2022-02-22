import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getGejala } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertGejala = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`gejala/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'gejala', history)
      getGejala(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertGejala
