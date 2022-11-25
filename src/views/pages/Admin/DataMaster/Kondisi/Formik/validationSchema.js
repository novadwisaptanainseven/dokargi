import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  nm_kondisi: Yup.string().required('Kondisi harus diisi'),
  bobot: Yup.number().typeError('Bobot harus berupa bilangan').required('Bobot harus diisi'),
})

export default validationSchema
