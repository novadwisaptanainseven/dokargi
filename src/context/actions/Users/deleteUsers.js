import { getUsers } from '.'
import axiosInstance from 'src/helpers/axios'

const deleteUsers = (id, dispatch, Swal) => {
  axiosInstance
    .get(`pengguna/hapus/${id}`)
    .then((res) => {
      getUsers(dispatch)

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

export default deleteUsers
