import { baseRoutePath } from 'src/helpers/url'
import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal = withReactContent(swal2)

const showAlertSuccess = (
  title = '',
  path = '',
  history = null,
  text = '',
  type = '',
  isAdmin = true,
) => {
  if (type === 'closeable') {
    Swal.fire({
      icon: 'success',
      title: title,
      html: text,
      showConfirmButton: true,
    }).then((res) => {})
  } else {
    Swal.fire({
      icon: 'success',
      title: title,
      html: text,
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      if (history) {
        if (isAdmin) {
          history.push(`${baseRoutePath}admin/${path}`)
        } else {
          history.push(`${baseRoutePath}${path}`)
        }
      }
    })
  }
}

export default showAlertSuccess
