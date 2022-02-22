import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getBobot } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertBobot = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`bobot/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'bobot', history)
      getBobot(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertBobot
