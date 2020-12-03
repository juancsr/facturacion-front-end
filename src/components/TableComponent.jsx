import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from '@devexpress/dx-react-grid-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const styles = () => ({
  customTable: {
    '& tbody tr:nth-of-type(even)': {
      backgroundColor: '#e9e9e9',
    },
    '& tbody tr td': {

    },
    '& thead tr th': {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  },
});

// eslint-disable-next-line react/prop-types
const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restProps}
    // eslint-disable-next-line react/prop-types
    className={classes.customTable}
  />
);

export const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);

const CurrencyFormatter = ({ value }) => (
  <b style={{ color: '#6302FA' }}>
    {value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
  </b>
);

CurrencyFormatter.propTypes = {
  value: PropTypes.number.isRequired,
};

export const CurrencyTypeProvider = (props) => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
