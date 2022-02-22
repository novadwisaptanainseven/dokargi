import axiosInstance from 'src/helpers/axios'

const selectPenyakit = (setData) => {
  axiosInstance
    .get(`penyakit`)
    .then((res) => {
      setData(res.data.data_penyakit)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectPenyakit
