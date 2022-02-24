import axiosInstance from 'src/helpers/axios'

const getEditBobot = (id, setData) => {
  axiosInstance
    .get(`bobot/ubah/${id}`)
    .then((res) => {
      setData(res.data)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getEditBobot
