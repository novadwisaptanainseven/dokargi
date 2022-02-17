const initState = (data) => {
  return {
    id_pasien: data ? data.id_pasien : '',
    nama: data ? data.nama : '',
    tmpt_lahir: data ? data.tmpt_lahir : '',
    tgl_lahir: data ? data.tgl_lahir : '',
    jkel: data ? data.jkel : '1',
    alamat: data ? data.alamat : '',
  }
}

export default initState
