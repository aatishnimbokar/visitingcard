import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, makeStyles, Toolbar, MenuItem } from "@material-ui/core";
import { display } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import image2 from "../assets/images/text-icon-2x.png";
import image3 from "../assets/images/images-icon-2x.png";
import image4 from "../assets/images/more-icon-2x.png";
import image5 from "../assets/images/undo-icon-2x.png";
import image6 from "../assets/images/redo-icon-2x.png";
import image7 from "../assets/images/proof-icon-2x.png";
import image8 from "../assets/images/save-icon-2x.png";



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import DeleteIcon from '@mui/icons-material/Delete';

// import DeleteIcon from '@mui/icons-material/Delete';

import { CssBaseline, useTheme, useMediaQuery } from "@material-ui/core";
// import {
//   BrowserRouter,
//   Routes,
//   Route,Link
// } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: "#ffffff" }}>
      <CssBaseline />
      <Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "40vw",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image2} />
            <NavLink className={classes.tabs} to="/">
              TEXT
            </NavLink>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image3} />

            <NavLink className={classes.tabs} to="/image">
              IMAGE
            </NavLink>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image4} />

            <NavLink className={classes.tabs} to="/">
              MORE
            </NavLink>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image5} />

            <NavLink className={classes.tabs} to="/undo">
              UNDO
            </NavLink>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image6} />

            <NavLink className={classes.tabs} to="/">
              REDO
            </NavLink>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon />
            </IconButton>
            <img src={image7} />

            <NavLink className={classes.tabs} to="/">
              PROOF
            </NavLink>
            <br />
            {/* <NavLink className={classes.tabs} to="/" >SAVE</NavLink> */}
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                <img src={image8} />

                  <Button variant="contained" {...bindTrigger(popupState)}>
                    SAVE
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>SAVE</MenuItem>
                    <MenuItem onClick={popupState.close}>SAVE AS</MenuItem>
                    {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
