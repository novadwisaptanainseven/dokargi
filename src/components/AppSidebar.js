import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { GlobalContext } from 'src/context/Provider'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { kontenState } = useContext(GlobalContext)
  const { data: dataKonten } = kontenState

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        <h3>{dataKonten && dataKonten.title_website.toUpperCase()}</h3>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
