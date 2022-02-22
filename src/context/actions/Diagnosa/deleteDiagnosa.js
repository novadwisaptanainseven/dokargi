import { getDiagnosa } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteDiagnosa = (id, dispatch, Swal) => {
  axiosInstance
    .get(`diagnosa/hapus/${id}`)
    .then((res) => {
      getDiagnosa(dispatch)

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

export default deleteDiagnosa
