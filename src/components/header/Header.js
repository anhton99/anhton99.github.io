import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../images/logodpz.png'


export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{paddingTop: "20px"}}>
        {['Về DpZ', 'Sản phẩm', 'Đối tác', 'Liên hệ'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
                <ListItemText primary={<Typography fontSize={20} ml={3} mb={-2} color="secondary">{text}</Typography>}
                              sx={{
                                  color : "#2096f3",
                                  paddingBottom: "10px",
                                }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = 'left';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#fff"}}>
        <Toolbar>
          <IconButton
            color="secondary"
            onClick={toggleDrawer(anchor, true)}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >{list(anchor)}</Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
            <img src={logo} alt="logo"/>
          </Typography>
          <Button variant="outlined" color="secondary">Liên Hệ</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}