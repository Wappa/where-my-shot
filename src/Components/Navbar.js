import React from "react";
import Shot from "../Images/shot.png";
import Shotlogo from "../Images/Where-my-place.png";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";

import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { TextField } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "7px",
  },
  img: {
    height: "60px",
  },
  search: {
    padding: "10px",
    width: "700px",
    display: "center",
  },

  icon: {
    fontSize :"huge",
    height : '80px',
    paddingLeft: "80px",
    alignItems: "right",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar position="fixed" className="navbar-appBar">
        <Toolbar className="navbar-toolbarColor">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className="navbar-menuButton"
          >
            <MenuIcon />
          </IconButton>
          <div>
            <IconButton
              variant="contained"
              type="submit"
              className="navbar-button"
              //onClick={() => dispatch(toggleDarkTheme)}
            >
              <img src={Shot} className={classes.img} alt="navbar-logo"></img>
              <img
                src={Shotlogo}
                className={classes.img}
                alt="navbar-logo"
              ></img>
            </IconButton>
          </div>
          <div className="navbar-search">
            <TextField
              id="filled-search"
              className={classes.search}
              label="Search"
              type="search"
              variant="filled"
            />
          </div>
          <div>
            <btn>
              <Brightness4Icon
                className={classes.icon}
                OnClick={console.log("Floup")}
              ></Brightness4Icon>
            </btn>
          </div>
          <div>
            <AccountCircleIcon className={classes.icon}></AccountCircleIcon>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
