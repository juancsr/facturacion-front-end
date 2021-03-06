import React from 'react';
import {
  Plugin,
  Template,
  Getter,
} from '@devexpress/dx-react-core';
import { TableHeaderRow, Table } from '@devexpress/dx-react-grid-material-ui';
import BtnDescargarFactura from './components/descargar-factura/BtnDescargarFactura';
import DeshabilitarFactura from './components/deshabilitar-factura/DeshabilitarFactura';

const ICON_COLUMN_TYPE = Symbol('icon');

// eslint-disable-next-line no-unused-vars
const columnsWithIconColumn = ({ tableColumns }) => [
  ...tableColumns,
  {
    type: ICON_COLUMN_TYPE,
    key: ICON_COLUMN_TYPE.toString(),
  },
];

const OpcionesPlugin = () => (
  <Plugin name="IconColumn" dependencies={[{ name: 'Table' }]}>
    <Getter name="tableColumns" computed={columnsWithIconColumn} />
    <Template
      name="tableCell"
      predicate={({ tableColumn, tableRow }) => tableColumn.type === ICON_COLUMN_TYPE
        && tableRow.type !== TableHeaderRow.ROW_TYPE}
    >
      {(params) => {
        const {
          tableRow: { row },
        } = params;
        // changeRow((a) => console.log(a));
        // const clickHandler = () => console.log('click!');

        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
          <Table.Cell {...params} style={{ padding: 8 }}>
            <BtnDescargarFactura idFactura={row.id_factura} />
            <DeshabilitarFactura idFactura={row.id_factura} />
          </Table.Cell>

        );
      }}
    </Template>
  </Plugin>
);

export default OpcionesPlugin;
