import axiosInstance from 'src/helpers/axios'

const getBobotById = (id, setData) => {
  axiosInstance
    .get(`bobot/detail/${id}`)
    .then((res) => {
      setData(res.data.data_bobot)
      // console.log(res.data.data_bobot);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getBobotById
