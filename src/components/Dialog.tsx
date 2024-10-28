import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetModal } from '../redux/modal-slice';

export function BasicModal({ children, title, showActions }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    dispatch(resetModal(''));
    setOpen(false);
  };

  const handleShow = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Dialog open={true} onClose={handleClose}>
        <DialogTitle className="modal-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        {showActions && (
          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
