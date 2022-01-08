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
        <Button onClick={() => setOpen(true)}>Test</Button>
        <AddCollection open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  )
}
export default Header;