import axiosInstance from 'src/helpers/axios'

const getKondisiById = (id, setData) => {
  axiosInstance
    .get(`kondisi/detail/${id}`)
    .then((res) => {
      setData(res.data.data_kondisi)
      // console.log(res.data.data_gejala);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getKondisiById
