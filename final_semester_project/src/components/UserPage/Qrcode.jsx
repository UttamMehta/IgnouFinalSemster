import React from 'react'
import QRCode from 'react-qr-code';

export default function Qrcode() {

    let token="gfjhvbfjkbhf"

  return (
    <div>
      <QRCode value={token} />
    </div>
  )
}
