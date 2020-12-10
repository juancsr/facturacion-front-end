import React, { useState } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { facturacionReducerPropTypes } from '../../../../propTypes/reducersPropTypes';
import { CurrencyTypeProvider } from '../../../../components/TableComponent';

const GridCarritoProductos = ({ facturasReducer }) => {
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'nombre', title: 'Nombre' },
    { name: 'cantidad', title: 'Cantidad' },
    { name: 'precio_unidad', title: 'Precio/U' },
    { name: 'iva', title: 'IVA' },
    { name: 'valorIva', title: 'Valor IVA/U' },
    { name: 'valorTotalProducto', title: 'Valor de compra' },
  ]);

  const [currencyColumns] = useState(['precio_unidad', 'valorIva', 'valorTotalProducto']);

  return (
    <Paper>
      <Grid
        rows={facturasReducer.productosNuevaFactura.map((producto) => {
          const valorIva = producto.precio_unidad * producto.iva;
          const valorTotalProducto = (producto.precio_unidad * producto.iva
            + producto.precio_unidad) * producto.cantidad;
          return { ...producto, valorIva, valorTotalProducto };
        })}
        columns={columns}
      >
        <CurrencyTypeProvider for={currencyColumns} />
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};

GridCarritoProductos.propTypes = {
  facturasReducer: facturacionReducerPropTypes.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, null)(GridCarritoProductos);
