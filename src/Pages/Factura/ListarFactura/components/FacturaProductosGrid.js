import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Grid,
    Table,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

const FacturaProductosGrid = ({ productos }) => {
    const [columns] = useState([
        { name: 'nombre', title: 'Nombre' },
        { name: 'precio', title: 'Precio' },
        { name: 'iva', title: 'IVA' },
        { name: 'valorIVA', title: 'Valor IVA' },
        { name: 'total', title: 'Valor de compra' },
    ]);

    return (
        <Paper>
            <Grid
                rows={productos}
                columns={columns}
            >
                <Table />
                <TableHeaderRow />
            </Grid>
        </Paper>
    );
}


export default FacturaProductosGrid;