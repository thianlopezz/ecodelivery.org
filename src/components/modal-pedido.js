import React from "react"

import Modal from "react-modal"
// import styles from "../components/q7863jhab27tadbkas.module.css"

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

export default function ModalPedido({ order = {}, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Info order"
    >
      <h2>
        Detalles del pedido{" "}
        <a style={{ fontSize: "1rem" }} href="javascript:;" onClick={onClose}>
          Cerrar
        </a>
      </h2>

      <h3 style={{ textAlign: "center" }}>{order.comercio}</h3>
      {order.productos && (
        <table className="zui_table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.productos.map(prod => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.quantity}</td>
                <td>${prod.subtotal}</td>
                <td>${prod.total}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">Total</td>
              <td>${(+order.totalOrden).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </Modal>
  )
}
