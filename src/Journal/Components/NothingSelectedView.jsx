import { StarBorder } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"

export const NothingSelectedView = () => {
   return (
      <Grid
         sx={{
            height: "86vh",
            backgroundColor: "secondary.main",
            borderRadius: 4
         }} 
         container
         justifyContent="center"
         alignItems="center"   
      >
         <Grid item>
            <Grid container direction="column" justifyContent="center">
               <IconButton sx={{color: "white"}}>
                  <StarBorder sx={{ fontSize: "40px"}}/>
               </IconButton>

               <Typography 
                  component="h2" 
                  variant="overline" 
                  fontSize={ 20 } 
                  color="white"
               >Crea una nueva nota</Typography>
            </Grid>
         </Grid>
      </Grid>
   )
}