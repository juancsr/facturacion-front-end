import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
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
import DetalleDialogPlugin from './grid-plugins/FacturaDetallePlugin';
import DetailDialog from './FacturaDetalleDialog';
import { facturasPropType } from '../../../../propTypes/facturaPropTypes';

const GridProductos = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'vendedor', title: 'Vendedor' },
    { name: 'cliente', title: 'Cliente' },
    { name: 'estado', title: 'Estado' },
    { name: 'fechaRegistro', title: 'Fecha de Registro' },
    { name: 'fechaCompra', title: 'Fecha de Compra' },
    // { name: 'totalProductos', title: 'Total Productos Comprados' },
    // { name: 'valorTotalIVA', title: 'Valor Total IVA' },
    { name: 'valorTotal', title: 'Valor Total' },
    { name: 'opciones', title: 'Opciones' },
  ]);

  const [currencyColumns] = useState(['valorTotal']);

  const [sorting, setSorting] = useState([
    { columnName: 'vendedor', direction: 'asc' },
    { columnName: 'codigo', direction: 'asc' },
    { columnName: 'cliente', direction: 'asc' },
    { columnName: 'estado', direction: 'asc' },
    { columnName: 'fechaRegistro', direction: 'asc' },
    { columnName: 'fechaCompra', direction: 'asc' },
    { columnName: 'valorTotal', direction: 'asc' },
  ]);

  const opciones = ([
    <Tooltip title="Descargar factura">
      {// eslint-disable-next-line max-len
      /* <IconButton className="GridButton" size="small" color="primary" style={{background: '#12A6E0'}}> */}
      <IconButton className="GridButton" size="small">
        <SaveAltIcon style={{ color: '#12A6E0' }} />
      </IconButton>
    </Tooltip>,
    <Tooltip title="Anular factura">
      {// eslint-disable-next-line max-len
      /* <IconButton className="GridButton" variant="contained" size="small" style={{background: '#E0284C'}} > */}
      <IconButton className="GridButton" size="small" style={{ background: '' }}>
        <ClearIcon style={{ color: '#E0284C' }} />
      </IconButton>
    </Tooltip>,
  ]);

  // const data =

  return (
    <Paper>
      <Grid
        rows={data.map((element) => ({ ...element, opciones }))}
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
        <DetalleDialogPlugin dialogComponent={DetailDialog} />
        <TableHeaderRow showSortingControls />
        <Toolbar />
        <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
        <PagingPanel messages={{ info: (from) => `Mostrando ${from.from}-${from.to} de ${from.count}` }} />
      </Grid>
    </Paper>
  );
};

GridProductos.propTypes = {
  data: facturasPropType.isRequired,
};

export default GridProductos;
