import React, {useState, Fragment} from 'react';
import GridFactura from './components/GridFacturas';
import FilterSelect from './components/FilterSelect';

const ListaFactura = () => {

    const [searchValue, setSearchValue] = useState('');

    const [data, setData] = useState([
        {
            vendedor: 'Erika Lucero', cliente: 'Nicolas Meneses', codigo: '36B', estado: 'HABILITADA',
            fechaRegistro: '16/01/2020', fechaCompra: '16/01/2020', productos: [
                {nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700, total: 5700},
                {nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700, total: 5700},
                {nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190, total: 1190},
                {nombre: 'Sombrilla', precio: 20000, iva: 5, valorIVA: 1000, total: 21000}
            ],
            totalProductos: 30, valorTotalIVA: 2890, valorTotal: 33590,
            
        },
        {
            vendedor: 'Juan Sarmiento', descripcion: 'Mariela Reyes', codigo: '37B', estado: 'ANULADA',
            fechaRegistro: '02/10/2020', fechaCompra: '16/01/2020', totalProductos: 30, valorTotalIVA: 1890, valorTotal: 27890,
            productos: [
                {nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700, total: 5700},
                {nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190, total: 1190},
                {nombre: 'Sombrilla', precio: 20000, iva: 5, valorIVA: 1000, total: 21000}
            ],
            
        },
        {
            vendedor: 'Lorena Reyes', descripcion: 'Luis Sabogal', codigo: '36A', estado: 'HABILITADA',
            fechaRegistro: '24/12/2020', fechaCompra: '24/12/2020', totalProductos: 30, valorTotalIVA: 890, valorTotal: 6890,
            productos: [
                {nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700, total: 5700},
                {nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190, total: 1190}
            ],
        }
    ]);
    
    return(
    <Fragment>
        <h3>Lista de facturas</h3>
        <div style={{textAlign: 'left', marginLeft: 10}}>
            <FilterSelect />
        </div>
        <GridFactura data={data} searchValue={searchValue} setSearchValue={setSearchValue}></GridFactura>
    </Fragment>)
};

export default ListaFactura;