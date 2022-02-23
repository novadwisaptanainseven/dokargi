import axiosInstance from '../../../helpers/axios'

const selectPasien = (setData) => {
  axiosInstance
    .get(`pasien`)
    .then((res) => {
      setData(res.data.data_pasien)
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    })
}

export default selectPasien
