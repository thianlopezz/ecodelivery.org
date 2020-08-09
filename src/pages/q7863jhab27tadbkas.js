import React, { useEffect, useState } from "react"
import styles from "./q7863jhab27tadbkas.module.css"
import * as moment from "moment"
import ModalUsuario from "../components/modal"
import ModalPedido from "../components/modal-pedido"

// const URL_BASE = "http://localhost:3001"
const URL_BASE = "https://api.ecodelivery.org:8443"

export default () => {
  const [loading, setLoading] = useState(true)
  const [loadingIsOpen, setLoadingIsOpen] = useState(true)
  const [orders, setOrders] = useState([])
  const [isOpenModalUsuario, setIsOpenModalUsuario] = useState(false)
  const [isOpenModalPedido, setIsOpenModalPedido] = useState(false)
  const [orderSelected, setOrderSelected] = useState({})

  const [configuraciones, setConfiguraciones] = useState([])

  useEffect(() => {
    getOrders()
    getConfiguraciones()
  }, [])

  const getOrders = async () => {
    setLoading(true)
    let response = await fetch(URL_BASE + "/command/orders")

    if (response.ok) {
      let data = await response.json()
      setOrders(data)
    }

    setLoading(false)
  }

  const getConfiguraciones = async () => {
    setLoadingIsOpen(true)
    let response = await fetch(URL_BASE + "/configuracion")

    if (response.ok) {
      let data = await response.json()
      setConfiguraciones(data)
    }

    setLoadingIsOpen(false)
  }

  const setIsOpen = async isOpen => {
    setLoadingIsOpen(true)
    let response = await fetch(URL_BASE + "/configuracion", {
      method: "PUT",
      body: JSON.stringify({ isOpen }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      let data = await response.json()
      if (data.success) {
        console.log("Modificado")
        getConfiguraciones()
      }
    }

    // setLoadingIsOpen(false)
  }

  const conf = configuraciones.find(conf => conf.clave == "isOpen")

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <section>
          <h1 style={{ textAlign: "center" }}>Ecodelivery command center</h1>
        </section>
      </article>
      {loading ? (
        <img className={styles.loading} width="50px" src="/loading.svg" />
      ) : (
        <>
          <section>
            <article className={styles.article}>
              <section style={{ textAlign: "center" }}>
                {loadingIsOpen ? (
                  <img
                    className={styles.loading}
                    width="50px"
                    src="/loading.svg"
                  />
                ) : conf ? (
                  <h2 style={{ textAlign: "center" }}>
                    <a
                      href="javascript:;"
                      onClick={() =>
                        conf.valor == "1" ? setIsOpen(0) : setIsOpen(1)
                      }
                    >
                      {conf.valor == "1" ? "ABIERTO" : "CERRADO"}
                    </a>
                  </h2>
                ) : (
                  <h2>No conf</h2>
                )}
              </section>
            </article>
          </section>
          <section className={styles.table_responsive}>
            <h2>
              N. Pedidos {orders.length}{" "}
              <small>
                {" "}
                <a
                  href="javascript:;"
                  onClick={() => {
                    getOrders()
                    getConfiguraciones()
                  }}
                >
                  Actualizar
                </a>{" "}
              </small>
            </h2>
            <table className={styles.zui_table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Afiliado</th>
                  <th>Ecobox</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Total orden</th>
                  <th>Tarifa envío</th>
                  <th>Propina</th>
                  <th>Total</th>
                  <th>Paga con</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.idOrden}>
                    <td>
                      <a
                        href="javascript:;"
                        onClick={() => {
                          setOrderSelected(order)
                          setIsOpenModalPedido(true)
                        }}
                      >
                        {order.idOrden + " / " + order.idWoo}
                      </a>
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        onClick={() => {
                          setOrderSelected(order)
                          setIsOpenModalUsuario(true)
                        }}
                      >
                        {order.nombre}
                      </a>
                    </td>
                    <td>{order.comercio}</td>
                    {order.nombreEcobox ? (
                      <td>{order.nombreEcobox}</td>
                    ) : (
                      <td>{"-"}</td>
                    )}
                    {order.estado == "pending" ? (
                      <td style={{ color: "#FF4343" }}>{order.status}</td>
                    ) : (
                      <td>{order.status}</td>
                    )}
                    <td>
                      {moment(order.feCreacion).format(
                        "DD[/]MM[/]YYYY hh:mm A"
                      )}
                    </td>
                    <td>${(+order.totalOrden).toFixed(2)}</td>
                    <td>${(+order.feeEnvio).toFixed(2)}</td>
                    <td>${(+order.propina).toFixed(2)}</td>
                    <td>${(+order.total).toFixed(2)}</td>
                    <td>${(+order.pagaCon).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}
      <ModalUsuario
        order={orderSelected}
        isOpen={isOpenModalUsuario}
        onClose={() => setIsOpenModalUsuario(false)}
      />
      <ModalPedido
        order={orderSelected}
        isOpen={isOpenModalPedido}
        onClose={() => setIsOpenModalPedido(false)}
      />
    </div>
  )
}
