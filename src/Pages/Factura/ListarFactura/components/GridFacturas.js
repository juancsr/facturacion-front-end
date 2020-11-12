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
        { name: 'vendedor', title: 'Vendedor' },
        { name: 'cliente', title: 'Cliente' },
        { name: 'codigo', title: 'Código' },
        { name: 'estado', title: 'Estado' },
        { name: 'fechaRegistro', title: 'Fecha de Registro' },
        { name: 'fechaCompra', title: 'Fecha de Compra' },
        { name: 'totalProductos', title: 'Total Productos Comprados' },
        { name: 'valorTotalIVA', title: 'Valor Total IVA' },
        { name: 'valorTotal', title: 'Valor Total' },
        { name: 'opciones', title: 'Opciones' }
    ]);

    const opciones = (
        [<button>Anular</button>,
        <button>MostrarPDF</button>])

    const [data, setData] = useState([
        {
            vendedor: 'Erika Lucero', cliente: 'Nicolas Meneses', codigo: '36B', estado: 'HABILITADA',
            fechaRegistro: '16/01/2020', fechaCompra: '16/01/2020', totalProductos: 30, valorTotalIVA: 300, valorTotal: 400,
            opciones: opciones
        },
        {
            vendedor: 'Juan Sarmiento', descripcion: 'Mariela Reyes', codigo: '37B', estado: 'ANULADA',
            fechaRegistro: '02/10/2020', fechaCompra: '16/01/2020', totalProductos: 30, valorTotalIVA: 300, valorTotal: 300,
            opciones: opciones
        },
        {
            vendedor: 'Lorena Reyes', descripcion: 'Luis Sabogal', codigo: '36A', estado: 'HABILITADA',
            fechaRegistro: '24/12/2020', fechaCompra: '24/12/2020', totalProductos: 30, valorTotalIVA: 300, valorTotal: 800,
            opciones: opciones
        }
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