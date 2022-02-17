import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  nama: Yup.string().required('Nama pasien harus diisi'),
  tmpt_lahir: Yup.string().required('Tempat lahir harus diisi'),
  tgl_lahir: Yup.string().required('Tanggal lahir harus diisi'),
  alamat: Yup.string().required('Alamat harus diisi'),
  jkel: Yup.string().required('Jenis kelamin harus diisi'),
})

export default validationSchema
