import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  nama: Yup.string().required('Nama pasien harus diisi'),
  tmpt_lahir: Yup.string().required('Tempat lahir harus diisi'),
  tgl_lahir: Yup.string().required('Tanggal lahir harus diisi'),
  jkel: Yup.string().required('Jenis kelamin harus dipilih'),
  alamat: Yup.string().required('Alamat pasien harus diisi'),
})

export default validationSchema
