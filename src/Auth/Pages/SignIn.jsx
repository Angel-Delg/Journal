import { Button, Divider, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as LinkRouter } from "react-router-dom"
import { FormContainer } from "../Layout/FormContainer"
import { Google } from "@mui/icons-material"

export const SignIn = () => {
   return (
      <FormContainer>
         <Grid 
            p={ 2 }
            flex
            container
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            gap={ 3 }
            sx={{
               minHeight: "100%"
            }}
         >
            <Typography 
               fontWeight="bold"
               fontSize={ 20 }
               variant="overline">Iniciar Sesión</Typography>
            <form>
               <Grid
                  container
                  justifyContent="center"
                  gap={ 3 }
               >
                  <TextField
                     label="Email"
                     fullWidth 
                     required type="text" placeholder="Correo electronico"/>

                  <TextField 
                     label="Password"
                     fullWidth
                     required type="password" placeholder="Contraseña"/>

                  <Button type="submit" variant="contained">Iniciar Sesión</Button>
               </Grid>
            </form>
            
            <Divider orientation="horizontal" flexItem>
               or
            </Divider>
            
            <Grid
               p={ 2 }
               container
               justifyContent="space-around"
               alignItems="center"
            >
               <Button 
                  variant="outlined" 
                  sx={{ display: "flex", alignItems: "center"}}>
                  <Google />
                  Google
               </Button>

               <Link component={ LinkRouter } to="/sign-up" >
                  Crear Cuenta
               </Link>
            </Grid>
         </Grid>
      </FormContainer>
   )
}