import axiosInstance from 'src/helpers/axios'

const selectDiagnosa = (setData) => {
  axiosInstance
    .get(`diagnosa`)
    .then((res) => {
      setData(res.data.data_diagnosa)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectDiagnosa
