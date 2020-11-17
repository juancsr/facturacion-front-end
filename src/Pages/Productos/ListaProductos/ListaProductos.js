import React, {Fragment, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import GridProductos from './components/GridProductos';
import CrearProducto from './components/CrearProducto';

const ListaProductos = () => {
    const [searchValue, setSearchValue] = useState('');

    const [data, setData] = useState([
        { nombre: 'Balón', descripcion: 'Balón de futbol', precio_unitario: 5000, disponible: 2 },
        { nombre: 'Mesa', descripcion: 'Mesa de billar', precio_unitario: 20000, disponible: 3 },
        { nombre: 'Abrigo', descripcion: 'Abrigo de invierno', precio_unitario: 20000, disponible: 1 }
    ]);

    return (
        <Fragment>
            <div style={{background: '#f6f6f6', margin: 5}}>
                <Typography variant="h4">Lista de Productos</Typography>
            </div>
            <div className="Container">
                <CrearProducto />
                <GridProductos searchValue={searchValue} setSearchValue={setSearchValue}></GridProductos>
            </div>
        </Fragment>
    )
}

export default ListaProductos;