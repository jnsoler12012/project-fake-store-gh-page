import React from 'react'
import ReactRouterProvider from '../Services/React-router-dom/ReactRouterProvider.jsx'
import Router from './Router.jsx'

export default function ReactRouterConsumer({children}) {
  return (
    <ReactRouterProvider>
        <Router>
            
        </Router>
    </ReactRouterProvider>
  )
}