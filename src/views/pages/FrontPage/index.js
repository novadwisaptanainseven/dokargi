import React from 'react'
import Content from './Content'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

const FrontPage = () => {
  return (
    <div className="front-page">
      <NavigationBar />
      <Content />
      <Footer />
    </div>
  )
}

export default FrontPage
