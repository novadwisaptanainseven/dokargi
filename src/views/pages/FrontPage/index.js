import React, { useContext, useEffect } from 'react'
import { getKonten } from 'src/context/actions/Konten'
import { GlobalContext } from 'src/context/Provider'
import Content from './Content'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

const FrontPage = () => {
  const { kontenState, kontenDispatch } = useContext(GlobalContext)
  const { data: dataKonten } = kontenState

  useEffect(() => {
    getKonten(kontenDispatch)
  }, [kontenDispatch])

  return (
    <div className="front-page">
      <NavigationBar dataKonten={dataKonten} />
      <Content />
      <Footer dataKonten={dataKonten} />
    </div>
  )
}

export default FrontPage
