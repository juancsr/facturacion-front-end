import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
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
            <Button className="GridButton" variant="contained" size="small" color="primary" style={{background: '#12A6E0'}}>
                <EditIcon style={{color: '#FFF'}} />
            </Button>
        </Tooltip>,
        <Tooltip title="Agregar existencias">
            <Button className="GridButton" variant="contained" size="small" style={{background: '#07EDB1'}}>
                <AddShoppingCartIcon style={{color: '#000'}} />
            </Button>
        </Tooltip>,
        <Tooltip title="Deshabilitar producto">
            <Button className="GridButton" variant="contained" size="small" style={{background: '#E0284C'}} >
                <ClearIcon style={{color: '#FFF'}} />
            </Button>
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
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
        },
        {
            codigo: '6D', nombre: 'Sombrilla', descripcion: 'Objeto para evitar los rayos del sol', precio_unitario: 540, disponible: 1,
            estado: 'Inactivo', opciones
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
                    pageSize={10}
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
                <SearchPanel messages={{searchPlaceholder: 'Buscar...'}}/>
                <PagingPanel messages={{info: (from) => `Mostrando ${from['from']}-${from['to']} de ${from['count']}`}}/>
            </Grid>
        </Paper>
    )
};


export default GridProductos;