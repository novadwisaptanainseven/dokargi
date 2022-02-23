import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getGejala } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editGejala = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`gejala/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'data-master/gejala', history)
      getGejala(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editGejala
