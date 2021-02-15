import React, { useState } from 'react';
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
import DetallesPlugin from './grid-plugins/detalle-plugin/DetallesPlugin';
import OpcionesPlugin from './grid-plugins/opciones-plugin/OpcionesPlugin';
import { facturasPropType } from '../../../../propTypes/facturaPropTypes';

const GridProductos = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'vendedor', title: 'Vendedor' },
    { name: 'cliente', title: 'Cliente' },
    { name: 'estado', title: 'Estado' },
    { name: 'fecha_registro', title: 'Fecha de Registro' },
    { name: 'fecha_compra', title: 'Fecha de Compra' },
    { name: 'valor_total', title: 'Total Factura' },
  ]);

  const [currencyColumns] = useState(['valor_total']);

  const [sorting, setSorting] = useState([
    { columnName: 'vendedor', direction: 'asc' },
    { columnName: 'codigo', direction: 'asc' },
    { columnName: 'cliente', direction: 'asc' },
    { columnName: 'estado', direction: 'asc' },
    { columnName: 'fechaRegistro', direction: 'asc' },
    { columnName: 'fechaCompra', direction: 'asc' },
    { columnName: 'valorTotal', direction: 'asc' },
  ]);

  return (
    <Paper>
      {data.length > 0
        ? (
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
            <DetallesPlugin />
            <OpcionesPlugin />
            <TableHeaderRow showSortingControls />
            <Toolbar />
            <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
            <PagingPanel messages={{ info: (from) => `Mostrando ${from.from}-${from.to} de ${from.count}` }} />
          </Grid>
        )
        : <p style={{ textAlign: 'center' }}>No hay información para mostrar</p>}
    </Paper>
  );
};

GridProductos.propTypes = {
  data: facturasPropType.isRequired,
};

export default GridProductos;
