import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getPasien } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editPasien = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`pasien/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'data-master/pasien', history)
      getPasien(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data.errors, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editPasien
