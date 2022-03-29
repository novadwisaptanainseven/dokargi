import axiosInstance from 'src/helpers/axios'
import { baseRoutePath } from 'src/helpers/url'

const getDiagnosaById = (id, setData, history) => {
  axiosInstance
    .get(`diagnosa/detail/${id}`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)
      history.push(baseRoutePath + 'konsultasi')
    })
}

export default getDiagnosaById
