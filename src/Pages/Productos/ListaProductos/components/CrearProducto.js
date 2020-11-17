import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';

import ModalFormulario from './FormularioProductos';

const CrearProducto = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleClick = (e) => setOpenModal(true)

    return (
        <Fragment>
            <Tooltip title="Crear nuevo producto">
                <Button onClick={handleClick} variant="contained" size="small" color="primary" className="MainButton">
                    <AddBoxIcon />
                Nuevo
            </Button>
            </Tooltip>
            <ModalFormulario open={openModal} setOpenModal={setOpenModal} />
        </Fragment>
    )
};

export default CrearProducto;