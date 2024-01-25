import { useState } from "react";
import { Box, IconButton } from "@mui/material"
import { Navbar, Sidebar } from "../Components"
import { Add } from "@mui/icons-material";

export const JournalLayout = ({ children, DrawerWidth }) => {
   const [openDrawer, setOpenDrawer] = useState(false)
   
   const onToggleDrawer = () => {
      setOpenDrawer(state => !state)
   }

   return (
      <Box sx={{ display: "flex" }}>
         <Navbar 
            toggleDrawer={ onToggleDrawer }
            drawerWidth={ DrawerWidth } />

         {/* Drawer */}
         <Sidebar
            toggleDrawer={ onToggleDrawer } 
            openState={ openDrawer }
            drawerWidth={ DrawerWidth }
         />

         <IconButton size="large" sx={{
            position: "fixed",
            right: 40,
            bottom: 40,
            zIndex: 200,
            color: "white",
            backgroundColor: "error.main",
            "&:hover": {
               backgroundColor: "white",
               color: "primary.main"
            }
         }}>
            <Add />
         </IconButton>

         {/* All Content */}
         <Box  component="main" flexGrow={ 1 }>
            { children }
         </Box>

      </Box>
   )
}