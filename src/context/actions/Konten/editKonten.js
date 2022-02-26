import { showAlertError, showAlertSuccess } from 'src/components/AlertMessages'
import { messageErrorUpdate, messageSuccessUpdate } from 'src/helpers/messages'
import { getKonten } from '.'
import axiosInstance from 'src/helpers/axios'

const editKonten = (values, setLoading, dispatch) => {
  setLoading(true)

  axiosInstance
    .post(`konten/update`, values, {
      header: {
        'Content-Type': `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      setLoading(false)
      showAlertSuccess(messageSuccessUpdate, 'pengaturan')
      getKonten(dispatch)
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data.errors, messageErrorUpdate)
      // console.log(err.response.data);
    })
}

export default editKonten
