import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button, Menu, MenuItem, Container, Box  } from '@mui/material'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";


function Nav() {

    //problem is that there is only one use state for both my drop down menus.  i need to fix this
    const [anchorEl, setAnchorEl] = useState(null)
    const [menuEl, setMenuEl] = useState(null)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorEl(null);
      };

      const handleClickDropMenu = (event) => {
        setMenuEl(event.currentTarget);
      };
    
      const handleCloseDropMenu = () => {
        setMenuEl(null);
      };



  return (
    <AppBar position='static' style={{ background: 'rgba(255, 242, 226, .05)' }} className=" max-w-screen-2xl mx-auto">
        <Container maxWidth="xl" className="bg-transparent ">
        <Toolbar >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickDropMenu}
              color="black"
              //className="hover:text-red-700"
            > <MenuIcon /></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menuEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(menuEl)}
              onClose={handleCloseDropMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleClick} hover={Boolean(anchorEl)}>
                     Projects
                </MenuItem>
                <MenuItem >
                  <a href="/">
                   
                     About Me
                   
                  </a>
                </MenuItem>
                <MenuItem >
                  <a href="/">
                 
                    Resume
                  
                  </a>
                </MenuItem>
                
         
                </Menu>
                </Box>
                <Box
            className="flex justify-left items-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Stack direction="row" spacing={2}>
                <Button style={{ color: 'black' }} id="resources-button" onClick={handleClick}>Projects</Button>
                <Button style={{ color: 'black' }}>About Me</Button>
                <Button style={{ color: 'black' }}>Resume</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}>
                
                <MenuItem><a href="/project1">Project1</a></MenuItem>
                <MenuItem><a href="/project1">Project2</a></MenuItem>
                <MenuItem><a href="/project1">Project3</a></MenuItem>

            </Menu>
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Nav