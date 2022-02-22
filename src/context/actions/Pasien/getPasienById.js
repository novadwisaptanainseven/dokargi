import axiosInstance from 'src/helpers/axios'

const getPasienById = (id, setData) => {
  axiosInstance
    .get(`pasien/detail/${id}`)
    .then((res) => {
      setData(res.data.data_pasien)
      // console.log(res.data.data_pasien);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getPasienById
