import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button, Menu, MenuItem, Container, makeStyles } from '@mui/material'
import { useState } from 'react'

function Nav() {
    const [anchorEl, setAnchorElNav] = useState(null)
    
    const handleClick = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      

  return (
    <AppBar position='static' style={{ background: 'rgba(255, 242, 226, .05)' }} className=" max-w-screen-2xl mx-auto">
        <Container maxWidth="xl" className="bg-transparent ">
        <Toolbar >
            <Stack direction="row" spacing={2}>
                <Button className="text-gray-900" id="resources-button" onClick={handleClick}>Projects</Button>
                <Button className="text-gray-900">About Me</Button>
                <Button className="text-gray-900">Resume</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}>
                <MenuItem>Project1</MenuItem>
                <MenuItem>Project2</MenuItem>
                <MenuItem>Project3</MenuItem>

            </Menu>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Nav