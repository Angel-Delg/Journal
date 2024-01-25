import { ThemeProvider } from "@emotion/react"
import { Fragment } from "react"

import { RouterApp } from "./Router"
import { Theme } from "./Theme"

const JournalApp = () => {
   return (
      <Fragment >
         <ThemeProvider theme={ Theme }>
            <RouterApp />
         </ThemeProvider>
      </Fragment>
   )
}

export default JournalApp