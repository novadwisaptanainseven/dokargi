import axiosInstance from 'src/helpers/axios'

const getKonsultasiDiagnosa = (id, setData) => {
  axiosInstance
    .get(`diagnosa/tambah/${id}`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getKonsultasiDiagnosa
