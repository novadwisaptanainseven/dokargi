import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getSolusiByIdPenyakit } from '.'
import { showAlertSuccess, showAlertError } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'

const editSolusi = (id, idPenyakit, values, setLoading, history, setData) => {
  setLoading(true)

  axiosInstance
    .post(`solusi/update/${id}`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, `data-master/penyakit/${idPenyakit}/solusi`, history)

      getSolusiByIdPenyakit(idPenyakit, setData)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data.errors, messageErrorUpdate)

      // console.log(err.response.data);
    })
}

export default editSolusi
