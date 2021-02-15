import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as facturasActions from '../../../../../../../../redux/actions/facturasAction';
import DetailDialog from './FacturaDetalleDialog';
import { facturaPropType } from '../../../../../../../../propTypes/facturaPropTypes';
import { facturacionReducerPropTypes } from '../../../../../../../../propTypes/reducersPropTypes';

const FacturaDetalleContainer = ({
  // eslint-disable-next-line no-unused-vars
  factura, pdfDownload, onClick, facturasReducer, GetProductosFactura,
}) => {
  console.log('bien');
  useEffect(() => {
    console.log(factura);
    // eslint-disable-next-line camelcase
    const { id_factura } = factura;
    console.log({ id_factura });
    // GetProductosFactura({ id_factura });
    console.log(facturasReducer);
  }, [onClick]);

  return (
    <>
      {pdfDownload
        ? <>Descargar PDF...</> // TODO: Actualizar por componente de PDF
        : <DetailDialog factura={factura} productos={[]} />
      // eslint-disable-next-line react/jsx-curly-newline
      }
    </>
  );
};

FacturaDetalleContainer.defaultProps = {
  pdfDownload: false,
};

FacturaDetalleContainer.propTypes = {
  factura: facturaPropType.isRequired,
  pdfDownload: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  facturasReducer: facturacionReducerPropTypes.isRequired,
  GetProductosFactura: PropTypes.func.isRequired,
};

const mapStateToProps = (facturasReducer) => facturasReducer;

export default connect(mapStateToProps, facturasActions)(FacturaDetalleContainer);
