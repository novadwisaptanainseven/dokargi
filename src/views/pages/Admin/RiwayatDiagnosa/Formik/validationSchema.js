import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  id_penyakit: Yup.string().required('Penyakit harus dipilih'),
  id_gejala: Yup.string().required('Gejala harus dipilih'),
  nilai_mb: Yup.number()
    .typeError('Nilai MB harus berupa bilangan')
    .required('Nilai MB harus diisi'),
  nilai_md: Yup.number()
    .typeError('Nilai MD harus berupa bilangan')
    .required('Nilai MD harus diisi'),
})

export default validationSchema
