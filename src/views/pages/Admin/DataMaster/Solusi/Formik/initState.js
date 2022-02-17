const initState = (data) => {
  return {
    id_penyakit: data ? data.id_penyakit : '',
    nm_penyakit: data ? data.nm_penyakit : '',
    deskripsi: data ? data.deskripsi : '',
    gambar: '',
  }
}

export default initState
