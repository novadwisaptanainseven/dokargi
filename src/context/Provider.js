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

  const dataGlobal = { loginState, loginDispatch, kontenState, kontenDispatch }

  return (
    <>
      <GlobalContext.Provider value={dataGlobal}>{children}</GlobalContext.Provider>
    </>
  )
}
