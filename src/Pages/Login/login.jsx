/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { LoginAction } from '../../redux/actions/loginActions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    marginBottom: 20,
  },
  pos: {
    marginBottom: 12,
  },
  inputText: {
    width: 400
  },
  center: {
    marginTop: 10,
    marginLeft: 'auto',
    textAlign: 'center',
  },
});


const Login = ({ loginReducer, LoginAction }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassowrd] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setRememberMe({ ...rememberMe, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    // event.prevent.default;
    console.log('iniciar sesión');
    LoginAction(username, password);
  }

  return (
    // <div className="Container">
    <Grid spacing={2} className="Container">
      <Card className={classes.root}>
        <CardContent>
          <h2>Inicia sesión en Facturación</h2>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Inicia sesión con tu usuario y contraseña.
          </Typography>
          <TextField
            required
            autoFocus
            className={classes.inputText}
            placeholder="Usuario"
            margin="none"
            id="email"
            label="Usuario"
            type="text"
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />
          <TextField
            required
            autoFocus
            className={classes.inputText}
            placeholder="Contreseña"
            margin="none"
            id="password"
            label="Contreseña"
            type="password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleChange}
                color="primary"
              />
            }
            style={{color: 'gray'}}
            label="Recordárme"
          />

          <br />
          <Button variant="contained" color="primary" className="MainButton" style={{ marginTop: 10 }} onClick={handleSubmit}>
            Iniciar sesión
          </Button>
          { loginReducer.response !== '' ? <p style={{color: 'red'}}>{loginReducer.response}</p> : <></>}
        </CardContent>
        <CardActions className={classes.center}>
          <Button variant="outlined" color="primary">Registrarse</Button>
        </CardActions>
      </Card>
    </Grid >
    // </div>
  );
};

Login.propTypes = {
  loginReducer: PropTypes.any,
  LoginAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = { LoginAction };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
