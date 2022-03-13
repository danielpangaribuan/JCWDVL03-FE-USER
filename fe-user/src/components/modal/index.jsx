import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Import showModalRegister
// import showModalRegister from "./header/index";

function MyModal(props) {
  return (
    <Modal
      className="modal-container"
      show={props.show}
      onHide={props.handleClose}
      size={props.size}
    >
      <Modal.Header className="modal-header text-center" closeButton>
        <Modal.Title className="modal-titleLogin">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body bg-dark">{props.modalBody}</Modal.Body>
    </Modal>
  );
}

export default MyModal;
