import { List, Logout } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ drawerWidth = 240, toggleDrawer }) => {
   return (
      <AppBar
         sx={{
            width: {
               md: `calc(100% - ${ drawerWidth }px)`
            }
         }}
         position="fixed">
         <Toolbar>
            <Grid container justifyContent="space-between">
               <Grid item>
                  <Grid container justifyContent="space-around" >
                     <IconButton
                        onClick={ toggleDrawer }
                        sx={{ color: "white", display: {
                           md: "none   "
                        }}}
                     >
                        <List/>
                     </IconButton>
                     <Typography fontSize={ 15 } component="h3" variant="overline" fontWeight="bold">Dashboard</Typography>
                  </Grid>
               </Grid>
               <Grid item>
                  <IconButton sx={{ color: "white"}}>
                     <Logout />
                  </IconButton>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   )
}