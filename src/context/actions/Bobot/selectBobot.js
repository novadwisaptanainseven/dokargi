import axiosInstance from 'src/helpers/axios'

const selectBobot = (setData) => {
  axiosInstance
    .get(`bobot`)
    .then((res) => {
      setData(res.data.data_bobot)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectBobot
