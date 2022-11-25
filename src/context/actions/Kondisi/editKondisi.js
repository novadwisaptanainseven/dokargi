import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getKondisi } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editKondisi = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`kondisi/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'data-master/kondisi', history)
      getKondisi(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editKondisi
