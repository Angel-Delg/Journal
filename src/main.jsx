import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { AuthProvider } from './Auth/Context/AuthProvider'
import { Theme } from './Theme'
import JournalApp from './JournalApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={ Theme }>
          <CssBaseline />
          <JournalApp />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)