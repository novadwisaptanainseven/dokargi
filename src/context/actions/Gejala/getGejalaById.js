import axiosInstance from 'src/helpers/axios'

const getGejalaById = (id, setData) => {
  axiosInstance
    .get(`gejala/detail/${id}`)
    .then((res) => {
      setData(res.data.data_gejala)
      // console.log(res.data.data_gejala);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getGejalaById
