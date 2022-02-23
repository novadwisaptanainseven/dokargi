import { getSolusiByIdPenyakit } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteSolusi = (idPenyakit, idSolusi, setData, Swal) => {
  axiosInstance
    .get(`solusi/hapus/${idSolusi}`)
    .then((res) => {
      getSolusiByIdPenyakit(idPenyakit, setData)

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
