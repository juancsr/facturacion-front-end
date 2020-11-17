import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
        background: '#f6f6f6',
        borderBottom: '1px solid #595959'
    },
    dialog: {
        fontSize: '6px !important'
    }
}));

const Formulario = ({ open, setOpenModal }) => {

    const classes = useStyles();

    const [showMessage, setShowMessage] = useState(false);
    // console.log('modal:', isOpen);

    const body = (
        <div>
            <h2 id="simple-modal-title">asdasd</h2>
            <p id="simple-modal-description">
                Formulario
          </p>
            {/* <SimpleModal /> */}
        </div>
    );
    const handleClose = () => {
        setOpenModal(false);
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
    }

    const save = () => {
        setShowMessage(true);
        setOpenModal(false);
    }

    const styles = {

    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
                <DialogTitle id="form-dialog-title" className={classes.header}>Registrar nuevo producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Todos los campos marcados con un asterisco (*) son obligatorios.
                    </DialogContentText>

                    <form>
                        <TextField
                            required
                            autoFocus
                            placeholder="Código del producto"
                            margin="none"
                            id="code"
                            label="Código"
                            type="text"
                            size="small"
                        />

                        <TextField
                            required
                            placeholder="Código del producto"
                            margin="none"
                            id="code"
                            label="Código"
                            type="text"
                            size="small"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nombre"
                            placeholder="Nombre del producto"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Código"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Precio por unidad"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Cantidad inicial"
                            type="number"
                            fullWidth
                        />
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Categoría</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                            // value={}
                            // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Categoría 1</MenuItem>
                                <MenuItem value={20}>Categoría 2</MenuItem>
                                <MenuItem value={30}>Categoría 3</MenuItem>
                            </Select>
                            <FormHelperText>La categoría determina el IVA del producto</FormHelperText>
                        </FormControl>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Descripción"
                            placeholder="Descripción del producto"
                            multiline
                            rowsMax={4}
                            style={{ marginTop: 10 }}
                            // value={value}
                            // onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button variant="contained" className="MainButton" onClick={save}>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                // key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={showMessage}
                autoHideDuration={6000}
                // onClose={handleClose}
                // onExited={handleExited}
                message={"Registrado"}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            Deshacer
                        </Button>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            // className={classes.close}
                            onClick={() => setShowMessage(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default Formulario;