import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import { Provider } from 'react-redux'
import { Store } from './Store'
import JournalApp from './JournalApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ Store }>
      <BrowserRouter>
        <CssBaseline />
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)