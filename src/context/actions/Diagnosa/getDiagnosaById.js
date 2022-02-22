import axiosInstance from 'src/helpers/axios'

const getDiagnosaById = (id, setData) => {
  axiosInstance
    .get(`diagnosa/detail/${id}`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getDiagnosaById
