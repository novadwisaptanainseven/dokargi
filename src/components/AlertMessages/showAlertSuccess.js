import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal = withReactContent(swal2)

const showAlertSuccess = (title, path, history = null, text = '') => {
  Swal.fire({
    icon: 'success',
    title: title,
    html: text,
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    if (history) {
      history.push(`/admin/${path}`)
    }
  })
}

export default showAlertSuccess
