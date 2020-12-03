// import PureComponent from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Plugin,
  Template,
  Getter,
} from '@devexpress/dx-react-core';

import { TableHeaderRow, Table } from '@devexpress/dx-react-grid-material-ui';

// const pluginDependencies = [
//   { name: 'DetailDialog' },
// ];

const ICON_COLUMN_TYPE = Symbol('icon');

const columnsWithIconColumn = ({ tableColumns }) => [
  {
    type: ICON_COLUMN_TYPE,
    key: ICON_COLUMN_TYPE.toString(),
    width: '70px',
  },
  ...tableColumns,
];

const DetalleDialogPlugin = ({ dialogComponent: Dialog }) => (
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
        // const clickHandler = () => ();

        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Table.Cell {...params} style={{ padding: 8 }}>
            <Dialog factura={row} />
          </Table.Cell>

        );
      }}
    </Template>
  </Plugin>
);

DetalleDialogPlugin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dialogComponent: PropTypes.object.isRequired,
};

export default DetalleDialogPlugin;
