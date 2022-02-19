const initState = (data) => {
  return {
    title_website: data ? data.title_website : '',
    deskripsi_aplikasi: data ? data.deskripsi_aplikasi : '',
    logo: '',
    nm_kampus: data ? data.nm_kampus : '',
    alamat_kampus: data ? data.alamat_kampus : '',
    tentang_kami: data ? data.tentang_kami : '',
  }
}

export default initState
