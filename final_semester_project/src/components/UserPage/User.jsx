import React from 'react'
import UserDetails from './UserDetails'
import OtherPageLink from './OtherPageLink'
import Qrcode from './Qrcode'

export default function User() {
  return (
    <div>
      <UserDetails />
      <Qrcode/>
      <OtherPageLink />
    </div>
  )
}
