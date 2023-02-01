import React from 'react'
import { HashRouter } from 'react-router-dom'

function ReactRouterProvider({ children }) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}

export default ReactRouterProvider