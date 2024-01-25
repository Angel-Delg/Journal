import { Button, Divider, Grid, TextField, Typography, Link } from "@mui/material"
import { FormContainer } from "../Layout/FormContainer"
import { Link as LinkRouter} from "react-router-dom"


export const SignUp = () => {
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
               variant="overline">Registrarse</Typography>
            <form>
               <Grid
                  container
                  justifyContent="center"
                  gap={ 3 }
               >
                  <TextField
                     autoComplete="off"
                     label="Fullname"
                     fullWidth 
                     required type="text" placeholder="Nombre de usuario"/>

                  <TextField
                     autoComplete="off"
                     label="Email"
                     fullWidth 
                     required type="text" placeholder="Correo electronico"/>

                  <TextField 
                     autoComplete="off"
                     label="Password"
                     fullWidth
                     required type="password" placeholder="Contraseña"/>

                  <Button type="submit" variant="contained">Crear cuenta</Button>
               </Grid>
            </form>
            <Divider orientation="horizontal" flexItem /> 
            <Link to="/sign-in" component={ LinkRouter } > Ya tienes una cuenta? </Link>
         </Grid>
      </FormContainer>
   )
}