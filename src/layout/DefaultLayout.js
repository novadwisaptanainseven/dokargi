import React, { useContext, useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from 'src/context/Provider'

import swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { checkSession } from 'src/context/actions/Auth'
import { getKonten } from 'src/context/actions/Konten'

const Swal = withReactContent(swal2)

const DefaultLayout = () => {
  const history = useHistory()
  const [isLogin, setIsLogin] = useState(false)
  const { profileUserDispatch, kontenDispatch } = useContext(GlobalContext)

  // Cek Session / apakah sudah login ?
  useEffect(() => {
    checkSession(history, Swal, setIsLogin, profileUserDispatch)
  }, [history, Swal, profileUserDispatch])

  // Get data konten
  useEffect(() => {
    getKonten(kontenDispatch)
  }, [kontenDispatch])

  return (
    <div>
      {/* Cek jika sudah login, maka render component */}
      {isLogin && (
        <>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
            <AppFooter />
          </div>
        </>
      )}
    </div>
  )
}

export default DefaultLayout
