import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import { productosPropType } from '../../../../propTypes/productosPropTypes';

const FacturaProductosGrid = ({ productos }) => {
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'nombre', title: 'Nombre' },
    { name: 'cantidad', title: 'Cantidad' },
    { name: 'precio', title: 'Precio/U' },
    { name: 'iva', title: 'IVA' },
    { name: 'valorIVA', title: 'Valor IVA' },
    { name: 'total', title: 'Valor de compra' },
  ]);

  return (
    <Paper>
      <Grid
        rows={productos.map((producto) => {
          const total = (producto.precio * producto.iva + producto.precio) * producto.cantidad;
          return { ...producto, total };
        })}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};

FacturaProductosGrid.propTypes = {
  productos: productosPropType.isRequired,
};

export default FacturaProductosGrid;
