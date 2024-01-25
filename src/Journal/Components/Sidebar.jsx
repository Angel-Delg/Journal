import { ArrowBack, Person } from "@mui/icons-material"
import { Divider, Drawer, Grid, IconButton, List, ListItemButton, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const Sidebar = ({ openState = true, drawerWidth, toggleDrawer }) => {
   const [widhtScreen, setWidthScreen] = useState(window.innerWidth)

   useEffect(() => {
      setWidthScreen( window.innerWidth )
   },[])
   
   return (
      <Drawer
         variant={ widhtScreen >= 900 ? "permanent" : "temporary"}
         component="nav"
         anchor="left"
         sx={{
            display: {
               xs: 'block'
            },
            '& .MuiDrawer-paper': {
               boxSizing: 'border-box',
               width: drawerWidth
            }
         }}
         open={ openState }
      >
         <Toolbar sx={{
               display: "flex",
               justifyContent: "space-between"
            }}
         >
            <Grid container alignItems="center">
               <IconButton>
                  <Person />  
               </IconButton>

               <Typography 
                  fontSize={ 15 }
                  fontWeight="bold"
                  variant="overline"
               >
                  Angel Delgado
               </Typography>
            </Grid>

            <IconButton
               sx={{
                  display: {
                     md: "none"
                  }
               }}
               onClick={ toggleDrawer }
            >
               <ArrowBack />
            </IconButton>
         </Toolbar>

         <Divider orientation="horizontal"/>

         <List>
            {
               ["January", "Febrary", "March"].map((month, index) => (
                  <ListItemButton key={ index }>
                     { month }
                  </ListItemButton>
               ))
            }
         </List>
      </Drawer>
   )
}