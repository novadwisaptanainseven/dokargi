import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getPenyakit } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editPenyakit = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`penyakit/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'data-master/penyakit', history)
      getPenyakit(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editPenyakit
