import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  nm_gejala: Yup.string().required('Gejala harus diisi'),
})

export default validationSchema
