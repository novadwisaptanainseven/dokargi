import axiosInstance from 'src/helpers/axios'

const getPenyakitById = (id, setData) => {
  axiosInstance
    .get(`penyakit/detail/${id}`)
    .then((res) => {
      setData(res.data.data_penyakit)
      // console.log(res.data.data_penyakit);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getPenyakitById
