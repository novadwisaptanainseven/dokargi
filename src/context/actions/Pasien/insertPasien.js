import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getPasien } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertPasien = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`pasien/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'data-master/pasien', history)
      getPasien(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data.errors, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertPasien
