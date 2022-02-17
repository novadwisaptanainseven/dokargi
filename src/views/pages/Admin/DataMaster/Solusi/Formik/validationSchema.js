import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  solusi: Yup.string().required('Solusi harus diisi'),
})

export default validationSchema
