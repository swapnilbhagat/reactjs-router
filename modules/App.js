import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Router</h1>
        <ul role="nav">
          <li><Link to="/first">First</Link></li>
          <li><Link to="/second">Second</Link></li>
        </ul>
      </div>
    )
  }
})
