import React, {useState, Fragment} from 'react';
import GridFactura from './components/GridFacturas';

const ListaFactura = () => {

    const [searchValue, setSearchValue] = useState('');

    return(
    <Fragment>
        <GridFactura searchValue={searchValue} setSearchValue={setSearchValue}></GridFactura>
    </Fragment>)
};

export default ListaFactura;