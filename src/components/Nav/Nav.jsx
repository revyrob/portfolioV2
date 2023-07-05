import React from 'react'
import { AppBar, Toolbar, IconButton, Stack, Button, Menu, MenuItem, Container, Box  } from '@mui/material'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import Social from '../Social/Social';


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

 //make it that after you get past the banner the background is a solid color
    //use state to change color of navbar when it scrolls
    const [nav, setNav] = useState(false);

    const changeColor = () => {
      if(window.scrollY >= 500) {
        setNav(true)
      }else {
        setNav(false)
      }
    }

    //add event listener to change color
    window.addEventListener('scroll', changeColor)

  return (
   

     <AppBar position='fixed' style={nav ?  { background: '#7FBABB' }: { background: 'rgba(255, 242, 226, .05)' }} className=" max-w-screen-3xl mx-auto ">
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
                  <a href="/me">        
                     About Me 
                  </a>
                </MenuItem>
                <MenuItem >
                  <a href="/resume">
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
                
                <MenuItem><a href="/#solarSystem" >Intergalactic Planetary</a></MenuItem>
                <MenuItem><a href="/#brianconFantomes" >Briancon Fantomes</a></MenuItem>
                <MenuItem><a href="/#motherEarth" >Mother Earth</a></MenuItem>
                <MenuItem><a href="/#instock" > InStock</a></MenuItem>


            </Menu>
            </Box>
            <Social/>
        </Toolbar>
       
        </Container>
    </AppBar>
  )
}

export default Nav