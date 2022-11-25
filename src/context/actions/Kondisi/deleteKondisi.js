import { getKondisi } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteKondisi = (id, dispatch, Swal) => {
  axiosInstance
    .get(`kondisi/hapus/${id}`)
    .then((res) => {
      getKondisi(dispatch)

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

export default deleteKondisi
