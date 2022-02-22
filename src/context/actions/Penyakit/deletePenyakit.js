import { getPenyakit } from '.'
import axiosInstance from 'src/helpers/axios'

const deletePenyakit = (id, dispatch, Swal) => {
  axiosInstance
    .get(`penyakit/hapus/${id}`)
    .then((res) => {
      getPenyakit(dispatch)

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

export default deletePenyakit
