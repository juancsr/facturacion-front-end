import React from 'react';
import {
  Plugin,
  Template,
  Getter,
} from '@devexpress/dx-react-core';
import { TableHeaderRow, Table } from '@devexpress/dx-react-grid-material-ui';
import DetailDialog from '../ProductoDetalle';

const ICON_COLUMN_TYPE = Symbol('icon');

// eslint-disable-next-line no-unused-vars
const columnsWithIconColumn = ({ tableColumns }) => [
  {
    type: ICON_COLUMN_TYPE,
    key: ICON_COLUMN_TYPE.toString(),
    width: '70px',
  },
  ...tableColumns,
];

const DetalleDialogPlugin = () => (
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

        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
          <Table.Cell {...params} style={{ padding: 4 }}>
            <DetailDialog producto={row} />
          </Table.Cell>

        );
      }}
    </Template>
  </Plugin>
);

export default DetalleDialogPlugin;
