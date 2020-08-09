import React from "react"

import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#___gatsby")

export default function ModalUsuario({ order = {}, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Info usuario"
    >
      <h2>
        Detalles de entrega{" "}
        <a style={{ fontSize: "1rem" }} href="javascript:;" onClick={onClose}>
          Cerrar
        </a>
      </h2>

      <div style={{ textAlign: "center" }}>
        <img
          style={{ borderRadius: "50%", width: "100px" }}
          src={order.fotoUsuario}
        />
      </div>
      <h4 style={{ textAlign: "center" }}>{order.nombre}</h4>
      <p style={{ textAlign: "center" }}>{order.contactoUsuario}</p>
      {order.location && (
        <p style={{ textAlign: "center" }}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${order.location.latitud},${order.location.longitud}`}
            target="_blank"
          >
            {order.location.referencia}
          </a>
        </p>
      )}
    </Modal>
  )
}
