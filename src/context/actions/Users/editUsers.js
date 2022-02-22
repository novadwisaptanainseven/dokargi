import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getUsers } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editUsers = (id, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`pengguna/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'pengguna', history)
      getUsers(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editUsers
