const initState = (data) => {
  return {
    nama: data ? data.nama : '',
    username: data ? data.username : '',
    password: '',
    konfirmasi_password: '',
    foto: '',
  }
}

export default initState
