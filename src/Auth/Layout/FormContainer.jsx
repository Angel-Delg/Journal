import { Grid } from '@mui/material'
import React, { Fragment } from 'react'

export const FormContainer = ({ children }) => {
   return (
      <Fragment>
         <Grid
            flex
            container
            margin="auto"
            alignContent="center"
            justifyContent="center"
            sx={{
               backgroundColor: "primary.main",
               minHeight: "100vh"
            }}>

           <Grid 
               item
               m={ 2 }
               boxShadow={ 3 } 
               sx={{
                  borderRadius: "13px",
                  minHeight: "450px",
                  maxWidth: "400px",
                  backgroundColor: "#f3f3f3"
               }}>
               { children }
            </Grid>        
         </Grid>
      </Fragment>
   )
}