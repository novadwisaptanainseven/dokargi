import axiosInstance from 'src/helpers/axios'

const getPasienById = (id, setData, setLoading) => {
  setLoading(true)

  axiosInstance
    .get(`pasien/detail/${id}`)
    .then((res) => {
      setData(res.data.data_pasien)
      setLoading(false)
      // console.log(res.data.data_pasien);
    })
    .catch((err) => {
      // console.log(err.response.data);
      setLoading(false)
    })
}

export default getPasienById
