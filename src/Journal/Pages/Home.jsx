import { Grid, Toolbar } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NothingSelectedView } from "../Components"

const DrawerWidth = 250;

export const Home = () => {
   return (
      <JournalLayout DrawerWidth={ DrawerWidth }>
         <Toolbar />
         <Grid
            p={ 1 }
            right={ 0 }
            container 
            position="absolute"
            sx={{
               maxWidth: {
                  md: `calc(100% - ${ DrawerWidth }px)`
               }
            }}
         >
            <NothingSelectedView />
         </Grid>
      </JournalLayout>
   )
}