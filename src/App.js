import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

import { orange, green } from "@material-ui/core/colors";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});
const useStyles = makeStyles({
  root: {
    backgroud: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0, 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styles</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<DeleteIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        label="Test"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">Welcome</Typography>
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="the time"
            placeholder="example@email.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" size="large">
            <Button
              startIcon={<SaveIcon />}
              href="#"
              color="primary"
              style={{ fontSize: 20 }}
            >
              Save
            </Button>
            <Button
              endIcon={<DeleteIcon />}
              href="#"
              color="secondary"
              style={{ fontSize: 20 }}
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
