import axiosInstance from 'src/helpers/axios'

const getDiagnosaByIdPasien = (id, setData) => {
  axiosInstance
    .get(`pasien/diagnosa/${id}`)
    .then((res) => {
      setData(res.data.data_solusi)
      // console.log(res.data.data_solusi);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default getDiagnosaByIdPasien
