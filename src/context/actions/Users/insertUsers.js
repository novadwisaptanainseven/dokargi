import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getUsers } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertUsers = (values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`pengguna/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessTambah, 'pengguna', history)
      getUsers(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertUsers
