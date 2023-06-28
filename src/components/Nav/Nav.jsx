import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button, Menu, MenuItem, Container, Box  } from '@mui/material'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";


function Nav() {

    //problem is that there is only one use state for both my drop down menus.  i need to fix this
    const [anchorEl, setAnchorEl] = useState(null)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorEl(null);
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
              //onClick={handleOpenNavMenu}
              color="black"
              //className="hover:text-red-700"
            > <MenuIcon /></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                  <a href="/">
                  
                     Projects
                    
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a href="/">
                   
                     About Me
                   
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a href="/">
                 
                    Resume
                  
                  </a>
                </MenuItem>
                
         
                </Menu>
                </Box>

<Box>
            <Stack direction="row" spacing={2}>
                <Button style={{ color: 'black' }} id="resources-button" onClick={handleClick}>Projects</Button>
                <Button style={{ color: 'black' }}>About Me</Button>
                <Button style={{ color: 'black' }}>Resume</Button>
            </Stack>
            {/* <Menu id="resources-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}>
                <MenuItem>Project1</MenuItem>
                <MenuItem>Project2</MenuItem>
                <MenuItem>Project3</MenuItem>

            </Menu> */}
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Nav