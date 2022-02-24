import axiosInstance from 'src/helpers/axios'

const getInsertBobot = (setData) => {
  axiosInstance
    .get(`bobot/tambah`)
    .then((res) => {
      setData(res.data)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getInsertBobot
