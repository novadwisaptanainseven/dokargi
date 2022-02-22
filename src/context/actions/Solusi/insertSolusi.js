import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getSolusi } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const insertSolusi = (idPenyakit, values, setLoading, history, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`solusi/insert`, values)
    .then((res) => {
      setLoading(false)
      // console.log(`/data-master/penyakit/${idPenyakit}/solusi`)
      showAlertSuccess(messageSuccessTambah, `data-master/penyakit/${idPenyakit}/solusi`, history)
      getSolusi(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default insertSolusi
