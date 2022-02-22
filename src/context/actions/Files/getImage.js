import { baseUrlImg } from 'src/helpers/url'

const getImage = (path, filename) => {
  return `${baseUrlImg}${path}/${filename}`
}

export default getImage
