import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    SearchState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    Toolbar,
    SearchPanel,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

const GridProductos = ({ searchValue, setSearchValue }) => {
    const [columns] = useState([
        { name: 'nombre', title: 'Nombre' },
        { name: 'descripcion', title: 'Description' },
        { name: 'precio_unitario', title: 'Precio/U' },
        { name: 'disponible', title: 'Disponible' },
        { name: 'opciones', title: 'Opciones' }
    ]);

    const [data, setData] = useState([
        { nombre: 'Balón', descripcion: 'Balón de futbol', precio_unitario: 5000, disponible: 2 },
        { nombre: 'Mesa', descripcion: 'Mesa de billar', precio_unitario: 20000, disponible: 3 },
        { nombre: 'Abrigo', descripcion: 'Abrigo de invierno', precio_unitario: 20000, disponible: 1 }
    ]);


    return (
        <Paper>
            <Grid
                rows={data}
                columns={columns}
            >
                <SearchState
                    value={searchValue}
                    onValueChange={setSearchValue}
                />
                <IntegratedFiltering />
                <Table />
                <TableHeaderRow />
                <Toolbar />
                <SearchPanel />
            </Grid>
        </Paper>
    )
};


export default GridProductos;