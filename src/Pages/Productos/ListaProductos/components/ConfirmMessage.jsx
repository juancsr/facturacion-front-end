import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const ConfirmMessage = ({ visible, message, closeMessage }) => {
  const [showMessage, setShowMessage] = useState(visible);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={showMessage}
      autoHideDuration={6000}
      onClose={() => setShowMessage(false)}
      message={message}
      action={(
        <>
          <Button color="secondary" size="small">
            {closeMessage}
          </Button>
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => setShowMessage(false)}
          >
            <CloseIcon />
          </IconButton>
        </>
      )}
    />
  );
};

ConfirmMessage.defaultProps = {
  visible: true,
  closeMessage: 'Deshacer',
};

ConfirmMessage.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string.isRequired,
  closeMessage: PropTypes.string,
};

export default ConfirmMessage;
