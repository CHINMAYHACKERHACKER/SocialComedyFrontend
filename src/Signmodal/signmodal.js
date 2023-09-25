import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Signmodal = () => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default Signmodal;