import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const styles = theme => ({
  customTable: {
    '& tbody tr:nth-of-type(even)': {
      backgroundColor: '#e9e9e9',
    },
    '& tbody tr td': {
      
    },
    '& thead tr th': {
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  },
});

const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table
    {...restProps}
    className={classes.customTable}
  />
);

export const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);

const CurrencyFormatter = ({ value }) => (
  <b style={{ color: '#6302FA' }}>
    {value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
  </b>
);

export const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);