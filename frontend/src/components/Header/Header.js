import react, { useState } from 'react';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AddCollection from '../AddCollection/AddCollection'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="static">
      <Toolbar>
        <Button sx={{float: "right"}}variant="contained" onClick={() => setOpen(true)}>Add Collection</Button>
        <AddCollection open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  )
}
export default Header;