import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdClose } from "react-icons/md";

import Slide from '@mui/material/Slide';
import CustomTooltip from './tooltip';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({project,color}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = (name) =>{
  return {
      color: '#fff',
      fontFamily:' Arial, sans-serif, cursive',
      textShadow: '0 0 4px #000000',
      // fontFamily: 'Pacifico',
      fontSize: `${name.length >= 11 ? '8.5px' : '12px'}`,
      zIndex: 1,
      background: 'none !important',
      border: 'none',
      padding: '0',
      cursor: 'pointer',
  }}

  return (
    <div>
      <CustomTooltip project={project}>
        <Button style={style(project.name)} onClick={handleClickOpen}>{project.name}</Button>
      </CustomTooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar style={{backgroundColor:color}}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {project.name}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem >
            <ListItemText primary={project.description} secondary="" />
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}