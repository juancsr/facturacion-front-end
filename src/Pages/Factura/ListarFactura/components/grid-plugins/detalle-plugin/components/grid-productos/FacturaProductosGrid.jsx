import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import { productosPropType } from '../../../../../../../../propTypes/productosPropTypes';
import { CurrencyTypeProvider } from '../../../../../../../../components/TableComponent';

const FacturaProductosGrid = ({ productos }) => {
  const [columns] = useState([
    { name: 'codigo', title: 'Código' },
    { name: 'nombre', title: 'Nombre' },
    { name: 'cantidad', title: 'Cantidad' },
    { name: 'precio', title: 'Precio/U' },
    { name: 'iva', title: 'IVA' },
    { name: 'valor_iva', title: 'Valor IVA/U' },
    { name: 'valor_total_Producto', title: 'Valor de compra' },
  ]);

  const [currencyColumns] = useState(['precio', 'valor_iva', 'valor_total_Producto']);

  return (
    <Paper>
      <Grid
        rows={productos.map((producto) => {
          const total = (producto.precio * producto.iva + producto.precio) * producto.cantidad;
          return { ...producto, total };
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

FacturaProductosGrid.propTypes = {
  productos: productosPropType.isRequired,
};

export default FacturaProductosGrid;
