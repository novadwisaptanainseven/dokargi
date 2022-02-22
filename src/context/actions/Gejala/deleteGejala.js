import { getGejala } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteGejala = (id, dispatch, Swal) => {
  axiosInstance
    .get(`gejala/hapus/${id}`)
    .then((res) => {
      getGejala(dispatch)

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

export default deleteGejala
