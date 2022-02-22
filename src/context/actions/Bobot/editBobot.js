import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getBobot } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editBobot = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`bobot/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'bobot', history)
      getBobot(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editBobot
