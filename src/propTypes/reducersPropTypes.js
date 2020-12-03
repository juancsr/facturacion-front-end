import PropTypes from 'prop-types';

export const loginReducerPropTypes = {
  username: PropTypes.string.isRequired,
};

export const notificationReducerPropTypes = {
  productosNotf: PropTypes.number,
  facturasNotf: PropTypes.number,
  userNotf: PropTypes.number,
};
