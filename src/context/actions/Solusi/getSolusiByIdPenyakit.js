import axiosInstance from 'src/helpers/axios'

const getSolusiByIdPenyakit = (id, setData) => {
  axiosInstance
    .get(`penyakit/solusi/${id}`)
    .then((res) => {
      setData(res.data.data_solusi)
      // console.log(res.data.data_solusi);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getSolusiByIdPenyakit
