import React from 'react'
import QRCode from 'react-qr-code';

export default function Qrcode() {

    let token="asbfijanfndfmfgbfgbmfgbmfgm;fg,bfgbmlbl;;vlbn"

  return (
    <div>
      <QRCode value={token} />
    </div>
  )
}
