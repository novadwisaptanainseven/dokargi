const initState = (data) => {
  return {
    nm_kondisi: data ? data.nm_kondisi : '',
    bobot: data ? data.bobot : '',
  }
}

export default initState
