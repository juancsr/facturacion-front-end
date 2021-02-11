import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const ConfirmMessage = ({ show, message }) => {
  const [showMessage, setShowMessage] = useState(show);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={showMessage}
      // hidden={showMessage}
      autoHideDuration={6000}
      message={message}
      action={(
        <>
          <Button color="secondary" size="small">
            Deshacer
          </Button>
          <IconButton
            aria-label="close"
            color="inherit"
            // className={classes.close}
            onClick={() => setShowMessage(false)}
          >
            <CloseIcon />
          </IconButton>
        </>
      )}
    />
  );
};

// ConfirmMessage.defaultProps = {
//   hiden: true,
// };

ConfirmMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmMessage;
