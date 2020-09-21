import React from 'react';
import { Home } from './features/Home/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "white",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
        <img src="stackline_logo.jpg" alt="logo" className="logo"/>
        </Toolbar>
      </AppBar>

      <Home />
    </div>
  );  
}

export default App;
