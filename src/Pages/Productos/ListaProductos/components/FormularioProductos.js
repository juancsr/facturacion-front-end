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

const Formulario = ({ open, setOpenModal }) => {

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

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Registrar producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        En este formulario se puede registrar nuevos productos.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="code"
                        label="Código"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre"
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
                        label="Descripción"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button variant="contained" color="primary" onClick={save}>
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