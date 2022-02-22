import axiosInstance from 'src/helpers/axios'

const selectUsers = (setData) => {
  axiosInstance
    .get(`pengguna`)
    .then((res) => {
      setData(res.data.data_pengguna)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectUsers
