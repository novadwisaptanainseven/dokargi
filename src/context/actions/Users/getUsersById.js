import axiosInstance from 'src/helpers/axios'

const getUsersById = (id, setData) => {
  axiosInstance
    .get(`pengguna/detail/${id}`)
    .then((res) => {
      setData(res.data.data_pengguna)
      // console.log(res.data.data_pengguna);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getUsersById
