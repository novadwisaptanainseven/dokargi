import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getDiagnosa } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editDiagnosa = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`diagnosa/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'diagnosa', history)
      getDiagnosa(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editDiagnosa
