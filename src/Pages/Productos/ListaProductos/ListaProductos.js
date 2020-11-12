import React, {useState} from 'react';
import GridProductos from './components/GridProductos';

const ListaProductos = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <GridProductos searchValue={searchValue} setSearchValue={setSearchValue}></GridProductos>
    )
}

export default ListaProductos;