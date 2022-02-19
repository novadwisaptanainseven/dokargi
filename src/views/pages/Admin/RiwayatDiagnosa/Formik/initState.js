const initState = (data) => {
  return {
    id_penyakit: data ? data.id_penyakit : '',
    id_gejala: data ? data.id_gejala : '',
    nilai_mb: data ? data.nilai_mb : '',
    nilai_md: data ? data.nilai_md : '',
  }
}

export default initState
