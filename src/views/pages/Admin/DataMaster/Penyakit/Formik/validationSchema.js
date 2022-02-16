import * as Yup from 'yup'

const GAMBAR_SIZE = 1048000 // Bytes => 1 mb * 1000 kb * 1000 bytes
const GAMBAR_SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

const validationSchema = Yup.object().shape({
  nm_penyakit: Yup.string().required('Nama penyakit harus diisi'),
  deskripsi: Yup.string().required('Deskripsi penyakit harus diisi'),
  gambar: Yup.mixed()
    .test('size', 'Kapasitas file maksimal 1 mb', (value) => {
      if (value) {
        return value && value.size <= GAMBAR_SIZE
      }
      return true
    })
    .test('type', 'Ekstensi yang diizinkan hanya jpg, jpeg, dan png', (value) => {
      if (value) {
        return value && GAMBAR_SUPPORTED_FORMATS.includes(value.type)
      }
      return true
    }),
})

export default validationSchema
