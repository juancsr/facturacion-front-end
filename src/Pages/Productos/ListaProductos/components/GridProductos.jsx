/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
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
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

import { TableComponent, CurrencyTypeProvider } from '../../../../components/TableComponent';

const GridProductos = ({ searchValue, setSearchValue, data }) => {
  const opciones = ([
    <Tooltip title="Actualizar información">
      <Button className="GridButton" variant="contained" size="small" color="primary" style={{ background: '#12A6E0' }}>
        <EditIcon style={{ color: '#FFF' }} />
      </Button>
    </Tooltip>,
    <Tooltip title="Agregar existencias">
      <Button className="GridButton" variant="contained" size="small" style={{ background: '#07EDB1' }}>
        <AddShoppingCartIcon style={{ color: '#000' }} />
      </Button>
    </Tooltip>,
    <Tooltip title="Deshabilitar producto">
      <Button className="GridButton" variant="contained" size="small" style={{ background: '#E0284C' }}>
        <ClearIcon style={{ color: '#FFF' }} />
      </Button>
    </Tooltip>,
  ]);

  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'nombre', title: 'Nombre' },
    { name: 'estado', title: 'Estado' },
    // { name: 'descripcion', title: 'Descripción' },
    { name: 'disponible', title: 'Existencias' },
    { name: 'precio_unidad', title: 'Precio/U' },
    { name: 'opciones', title: 'Opciones' },
  ]);

  const [sorting, setSorting] = useState([
    { columnName: 'nombre', direction: 'asc' },
    { columnName: 'descripcion', direction: 'asc' },
    { columnName: 'precio_unitario', direction: 'asc' },
    { columnName: 'disponible', direction: 'asc' },
  ]);

  const [currencyColumns] = useState(['precio_unidad']);
  console.log('data: ', data);
  return (
    <Paper>
      {data && data !== undefined && data.length > 0
        ? (
          <Grid
            rows={data.map((element) => ({ ...element, estado: 'Activo', opciones }))}
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
            <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
            <PagingPanel messages={{ info: (from) => `Mostrando ${from.from}-${from.to} de ${from.count}` }} />
          </Grid>
        )
        : <></>}

    </Paper>
  );
};

export default GridProductos;
