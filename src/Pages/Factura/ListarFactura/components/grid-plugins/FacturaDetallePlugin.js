// import PureComponent from 'react';
import React, { useState } from 'react';
import {
    Plugin,
    Template,
    Getter,
    TemplateConnector
} from '@devexpress/dx-react-core';

import { TableHeaderRow, Table } from "@devexpress/dx-react-grid-material-ui";

const pluginDependencies = [
    { name: 'DetailDialog' }
];

const ICON_COLUMN_TYPE = Symbol("icon");

const columnsWithIconColumn = ({ tableColumns }) => {
    // console.log(tableColumns)
    return [
        {
            type: ICON_COLUMN_TYPE,
            key: ICON_COLUMN_TYPE.toString(),
            width: "70px"
        },
        ...tableColumns
    ];
};

const DetalleDialogPlugin = ({ dialogComponent: Dialog }) => {

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Plugin name="IconColumn" dependencies={[{ name: "Table" }]}>
            <Getter name="tableColumns" computed={columnsWithIconColumn} />
            <Template
                name="tableCell"
                predicate={({ tableColumn, tableRow }) =>
                    tableColumn.type === ICON_COLUMN_TYPE &&
                    tableRow.type !== TableHeaderRow.ROW_TYPE
                }
            >
                {(params) => {

                    const {
                        tableRow: { row }
                    } = params;
                    // const clickHandler = () => ();

                    return (
                        <Table.Cell {...params} style={{ padding: 8 }}>
                            <Dialog factura={row}></Dialog>
                        </Table.Cell>

                    );
                }}
            </Template>
        </Plugin>
    );
}



export default DetalleDialogPlugin;