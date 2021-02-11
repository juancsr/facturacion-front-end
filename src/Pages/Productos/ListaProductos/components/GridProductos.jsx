/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
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
import ExistenciasPlugin from './grid-plugins/ProductoExistenciasPlugin';
import DetalleDialogPlugin from './grid-plugins/ProductoDetallePlugin';
import * as productosActions from '../../../../redux/actions/productosAction';

const GridProductos = ({ searchValue, setSearchValue, data }) => {
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'nombre', title: 'Nombre' },
    { name: 'estado', title: 'Estado' },
    { name: 'existencias', title: 'Existencias' },
    { name: 'precio_unidad', title: 'Precio/U' },
  ]);

  const [sorting, setSorting] = useState([
    { columnName: 'id_producto', direction: 'desc' },
    { columnName: 'nombre', direction: 'asc' },
    { columnName: 'descripcion', direction: 'asc' },
    { columnName: 'precio_unitario', direction: 'asc' },
    { columnName: 'disponible', direction: 'asc' },
  ]);

  const [currencyColumns] = useState(['precio_unidad']);

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
        <DetalleDialogPlugin />
        <ExistenciasPlugin />
        <TableHeaderRow showSortingControls />
        <Toolbar />
        <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
        <PagingPanel messages={{ info: (from) => `Mostrando ${from.from}-${from.to} de ${from.count}` }} />
      </Grid>
    </Paper>
  );
};

// const mapStateToProps = ({ productosReducer }) => productosReducer;

export default connect(null, productosActions)(GridProductos);
