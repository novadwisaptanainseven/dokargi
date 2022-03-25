import { messageErrorDaftar, messageSuccessDaftar } from 'src/helpers/messages'
import { showAlertError, showAlertSuccess } from '../../../components/AlertMessages'
import axiosInstance from 'src/helpers/axios'
import { getKonsultasiDiagnosa } from '../Diagnosa'

const daftarPasien = (
  values,
  setLoading,
  setPasien,
  setKonsultasi,
  onClose,
  setLoadingSkeleton,
) => {
  setLoading(true)
  setLoadingSkeleton(true)

  const textHtmlMessage = (id) => {
    return `Ini adalah ID Pasien hasil pendaftaran : <h3 style="margin-top: 8px">${id}</h3> Mohon segera disimpan agar tidak lupa`
  }

  // showAlertSuccess(messageSuccessDaftar, '', null, textHtmlMessage, 'closeable')

  axiosInstance
    .post(`pasien/insert`, values)
    .then((res) => {
      // Loading Indicator
      setLoading(false)
      setLoadingSkeleton(false)
      showAlertSuccess(
        messageSuccessDaftar,
        '',
        null,
        textHtmlMessage(res.data.data_pasien.id_pasien),
        'closeable',
      )
      setPasien(res.data.data_pasien)
      getKonsultasiDiagnosa(res.data.data_pasien.id_pasien, setKonsultasi)

      // Close modal after submit
      onClose(true)
    })
    .catch((err) => {
      // Loading Indicator
      setLoading(false)
      setLoadingSkeleton(false)
      showAlertError(err.response.data.errors, messageErrorDaftar)
      // console.log(err.response.data);
    })
}

export default daftarPasien
