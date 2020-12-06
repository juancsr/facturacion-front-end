import React from 'react';
import PropTypes from 'prop-types';
import {
  Plugin,
  Template,
  Getter,
} from '@devexpress/dx-react-core';

import { TableHeaderRow, Table } from '@devexpress/dx-react-grid-material-ui';
import FormularioExistencias from '../FormularioExistencias';

const ICON_COLUMN_TYPE = Symbol('icon');

const columnsWithIconColumn = ({ tableColumns }) => [
  ...tableColumns,
  {
    column: { name: 'opciones', title: 'Opciones' },
    type: ICON_COLUMN_TYPE,
    key: ICON_COLUMN_TYPE.toString(),
    width: '70px',
  },
];

const ExistenciasPlugin = () => (
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
          <Table.Cell {...params} style={{ padding: 8 }}>
            <FormularioExistencias producto={row} />
          </Table.Cell>

        );
      }}
    </Template>
  </Plugin>
);

ExistenciasPlugin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dialogComponent: PropTypes.object.isRequired,
  SeleccionarProducto: PropTypes.func.isRequired,
};

// export default connect(null, productosActions)(ExistenciasPlugin);
export default ExistenciasPlugin;
