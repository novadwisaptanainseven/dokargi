import React, { createContext, useReducer } from 'react'
import initState from './initStates/initState'
import reducer from './reducers/reducer'
import PropTypes from 'prop-types'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(reducer, initState)

  // Konten
  const [kontenState, kontenDispatch] = useReducer(reducer, initState)

  // Profile User
  const [profileUserState, profileUserDispatch] = useReducer(reducer, initState)

  // Dashboard
  const [dashboardState, dashboardDispatch] = useReducer(reducer, initState)

  // Penyakit
  const [penyakitState, penyakitDispatch] = useReducer(reducer, initState)

  // Gejala
  const [gejalaState, gejalaDispatch] = useReducer(reducer, initState)

  // Pasien
  const [pasienState, pasienDispatch] = useReducer(reducer, initState)

  // Bobot
  const [bobotState, bobotDispatch] = useReducer(reducer, initState)

  // Diagnosa
  const [diagnosaState, diagnosaDispatch] = useReducer(reducer, initState)

  // Users
  const [usersState, usersDispatch] = useReducer(reducer, initState)

  // Detail Informasi
  const [detailPenyakitState, detailPenyakitDispatch] = useReducer(reducer, initState)

  // Hasil Diagnosa
  const [hasilDiagnosaState, hasilDiagnosaDispatch] = useReducer(reducer, initState)

  const dataGlobal = {
    loginState,
    loginDispatch,
    kontenState,
    kontenDispatch,
    profileUserState,
    profileUserDispatch,
    dashboardState,
    dashboardDispatch,
    penyakitState,
    penyakitDispatch,
    gejalaState,
    gejalaDispatch,
    pasienState,
    pasienDispatch,
    bobotState,
    bobotDispatch,
    usersState,
    usersDispatch,
    diagnosaState,
    diagnosaDispatch,
    detailPenyakitState,
    detailPenyakitDispatch,
    hasilDiagnosaState,
    hasilDiagnosaDispatch,
  }

  return (
    <>
      <GlobalContext.Provider value={dataGlobal}>{children}</GlobalContext.Provider>
    </>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}
