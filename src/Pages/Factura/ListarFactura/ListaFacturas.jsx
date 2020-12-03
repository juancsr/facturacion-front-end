import React, { useState, Fragment } from 'react';
import GridFactura from './components/GridFacturas';
import FilterSelect from './components/FilterSelect';

const ListaFactura = () => {
  const [searchValue, setSearchValue] = useState('');

  // TODO: Use setData
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    {
      vendedor: 'Erika Lucero',
      cliente: 'Nicolas Meneses',
      codigo: '36B',
      estado: 'VIGENTE',
      fechaRegistro: '16/01/2020',
      fechaCompra: '16/01/2020',
      productos: [
        {
          codigo: 'ABF', cantidad: 2, nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700,
        },
        {
          codigo: 'ABG', cantidad: 1, nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700,
        },
        {
          codigo: 'ABX', cantidad: 1, nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190,
        },
        {
          codigo: 'ABW', cantidad: 1, nombre: 'Sombrilla', precio: 20000, iva: 5, valorIVA: 1000,
        },
      ],
      totalProductos: 30,
      valorTotalIVA: 2890,
      valorTotal: 33590,

    },
    {
      vendedor: 'Juan Sarmiento',
      descripcion: 'Mariela Reyes',
      codigo: '37B',
      estado: 'ANULADA',
      fechaRegistro: '02/10/2020',
      fechaCompra: '16/01/2020',
      totalProductos: 30,
      valorTotalIVA: 1890,
      valorTotal: 27890,
      productos: [
        {
          codigo: 'ABF', cantidad: 2, nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700,
        },
        {
          codigo: 'ABA', cantidad: 2, nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190,
        },
        {
          codigo: 'ABW', cantidad: 2, nombre: 'Sombrilla', precio: 20000, iva: 5, valorIVA: 1000,
        },
      ],

    },
    {
      vendedor: 'Lorena Reyes',
      descripcion: 'Luis Sabogal',
      codigo: '36A',
      estado: 'VIGENTE',
      fechaRegistro: '24/12/2020',
      fechaCompra: '24/12/2020',
      totalProductos: 30,
      valorTotalIVA: 890,
      valorTotal: 6890,
      productos: [
        {
          codigo: 'ABF', cantidad: 2, nombre: 'Balón', precio: 5000, iva: 19, valorIVA: 700,
        },
        {
          codigo: 'ABS', cantidad: 2, nombre: 'Guantes', precio: 1000, iva: 19, valorIVA: 190,
        },
      ],
    },
  ]);

  return (
    <>
      <h3>Lista de facturas</h3>
      <div style={{ textAlign: 'left', marginLeft: 10 }}>
        <FilterSelect />
      </div>
      <GridFactura data={data} searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
};

export default ListaFactura;
