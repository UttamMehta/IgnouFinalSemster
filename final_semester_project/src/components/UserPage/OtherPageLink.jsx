import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherPageLink() {
  return (
    <div>
      <h5>Project</h5>
      <h5>Notification</h5>
      <h5>Result</h5>
     <Link to="/card"><h5>Download Id Card</h5></Link>
      <h5>Other Important</h5>
    </div>
  )
}
