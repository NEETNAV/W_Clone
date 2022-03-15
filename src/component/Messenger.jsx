import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Login from './account/Login';

const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
});

const Messenger = () => {
  const classes = useStyles();
  return (
      <>
    <AppBar className={classes.loginHeader}>
      <Toolbar></Toolbar>
    </AppBar>
    <Login />
    </>

  );
};
export default Messenger;