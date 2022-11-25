import React, { useContext } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { GlobalContext } from 'src/context/Provider'
import getImage from 'src/context/actions/Files/getImage'
import { handleLogout } from '../AlertMessages'
import { useHistory } from 'react-router-dom'

const AppHeaderDropdown = () => {
  const history = useHistory()
  const { profileUserState } = useContext(GlobalContext)
  const { data } = profileUserState

  const goToEditUser = (e) => {
    e.preventDefault()

    history.push(`/admin/users/edit/${localStorage.id_user}`)
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle
        placement="bottom-end"
        className="py-0 d-flex align-items-center gap-2"
        caret={false}
      >
        <span className="d-none d-md-block">{data?.user?.nama}</span>
        <img
          src={getImage('foto_pengguna', data?.user?.foto)}
          alt={data?.user?.foto}
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          className="rounded-circle"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Pengaturan</CDropdownHeader>
        <CDropdownItem href="#" onClick={(e) => handleLogout(e)}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
