import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BtnEnviarPromocion from './BtnEnviarPromocion';

const PromocionesCard = () => {
  // const bull = <span className={classes.bullet}>•</span>;
  console.log('PromocionesCard');

  return (
    <div className="Container">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="subtitle1">
            Enviar correo de promoción
          </Typography>
          <TextField
            label="Cuerpo del correo"
            style={{ margin: 8 }}
            placeholder="Escribe la información de tu promoción"
            helperText="Este correo electrónico será enviado a todos tus clientes activos actuales"
            fullWidth
            rows={4}
            margin="normal"
            multiline
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <BtnEnviarPromocion />
        </Grid>
      </Grid>
    </div>
  );
};

export default PromocionesCard;
