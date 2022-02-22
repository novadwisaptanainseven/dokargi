import { getSolusi } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteSolusi = (id, dispatch, Swal) => {
  axiosInstance
    .get(`solusi/hapus/${id}`)
    .then((res) => {
      getSolusi(dispatch)

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

export default deleteSolusi
