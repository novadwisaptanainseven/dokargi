import axiosInstance from 'src/helpers/axios'

const selectSolusi = (setData) => {
  axiosInstance
    .get(`solusi`)
    .then((res) => {
      setData(res.data.data_solusi)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectSolusi
