import { getPasien } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteBobot = (id, dispatch, Swal) => {
  axiosInstance
    .get(`bobot/hapus/${id}`)
    .then((res) => {
      getPasien(dispatch)

      Swal.fire({
        icon: 'success',
        title: 'Terhapus',
        text: 'Data berhasil dihapus',
      })
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `"Data gagal dihapus. ${err.response.data.pesan}"`,
      })
      // console.log(err.response.data);
    })
}

export default deleteBobot
