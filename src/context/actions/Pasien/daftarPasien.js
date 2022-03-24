import { messageErrorTambah, messageSuccessTambah } from 'src/helpers/messages'
import { getPasien } from '.'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'
import getPasienById from './getPasienById'

const daftarPasien = (values, setLoading, setData) => {
  setLoading(true)

  axiosInstance
    .post(`pasien/insert`, values)
    .then((res) => {
      setLoading(false)
      showAlertSuccess(
        messageSuccessTambah,
        '',
        null,
        'Ini adalah ID Pasien hasil pendaftaran : IMR0001, Mohon segera disimpan agar tidak lupa',
      )
      getPasienById()
    })
    .catch((err) => {
      setLoading(false)
      showAlertError(err.response.data.errors, messageErrorTambah)
      // console.log(err.response.data);
    })
}

export default daftarPasien
