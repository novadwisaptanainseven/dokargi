import axiosInstance from 'src/helpers/axios'

const getSolusiById = (id, setData) => {
  axiosInstance
    .get(`solusi/detail/${id}`)
    .then((res) => {
      setData(res.data.data_solusi)
      // console.log(res.data.data_solusi);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getSolusiById
