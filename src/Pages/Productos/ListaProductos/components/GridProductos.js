import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import {
    SearchState,
    IntegratedFiltering,
    IntegratedSorting,
    SortingState,
    PagingState,
    IntegratedPaging
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    Toolbar,
    SearchPanel,
    TableHeaderRow,
    PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

import { TableComponent, CurrencyTypeProvider } from '../../../../components/TableComponent';

const GridProductos = ({ searchValue, setSearchValue }) => {
    const opciones = ([
        <Tooltip title="Actualizar información">
            <IconButton size="small" color="primary" component="span">
                <EditIcon style={{color: '#000'}} />
            </IconButton>
        </Tooltip>,
        <Tooltip title="Agregar existencias">
            <IconButton size="small" color="primary" component="span">
                <AddShoppingCartIcon style={{color: '#000'}} />
            </IconButton>
        </Tooltip>,
        <Tooltip title="Deshabilitar producto">
            <IconButton size="small" component="span">
                <ClearIcon style={{color: '#F07F84'}} />
            </IconButton>
        </Tooltip>
    ]);

    const [columns] = useState([
        { name: 'codigo', title: 'Código' },
        { name: 'nombre', title: 'Nombre' },
        { name: 'estado', title: 'Estado' },
        { name: 'descripcion', title: 'Descripción' },
        { name: 'disponible', title: 'Existencias' },
        { name: 'precio_unitario', title: 'Precio/U' },
        { name: 'opciones', title: 'Opciones' }
    ]);

    const [data, setData] = useState([
        {
            codigo: '1A', nombre: 'Balón', descripcion: 'Balón de futbol', precio_unitario: 5000, disponible: 2,
            estado: 'Activo', opciones
        },
        {
            codigo: '2A', nombre: 'Mesa', descripcion: 'Mesa de billar', precio_unitario: 20000, disponible: 3,
            estado: 'Activo', opciones
        },
        {
            codigo: '4F', nombre: 'Abrigo', descripcion: 'Abrigo de invierno', precio_unitario: 20000, disponible: 1,
            estado: 'Activo', opciones
        },
        {
            codigo: '9F', nombre: 'Paraguas', descripcion: 'Objeto para evitar la lluvia', precio_unitario: 450, disponible: 1,
            estado: 'Activo', opciones
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
        }

    ]);

    const [sorting, setSorting] = useState([
        { columnName: 'nombre', direction: 'asc' },
        { columnName: 'descripcion', direction: 'asc' },
        { columnName: 'precio_unitario', direction: 'asc' },
        { columnName: 'disponible', direction: 'asc' }
    ]);

    const [currencyColumns] = useState(['precio_unitario']);

    return (
        <Paper>
            <Grid
                rows={data}
                columns={columns}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={4}
                />
                <IntegratedPaging />
                <SearchState
                    value={searchValue}
                    onValueChange={setSearchValue}
                />
                <IntegratedFiltering />
                <SortingState
                    sorting={sorting}
                    onSortingChange={setSorting}
                />
                <IntegratedSorting />
                <CurrencyTypeProvider for={currencyColumns} />
                <Table tableComponent={TableComponent} />
                <TableHeaderRow showSortingControls />
                <Toolbar />
                <SearchPanel />
                <PagingPanel />
            </Grid>
        </Paper>
    )
};


export default GridProductos;