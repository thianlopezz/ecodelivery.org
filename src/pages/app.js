import React from "react"
import styles from "./app.module.css"

export default () => (
  <div className={styles.container}>
    <div className={styles.contenido}>
      <h2>¡Ya estamos aquí!</h2>
      <h1>Descarga la App</h1>
      <a
        href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
        target="_blank"
      >
        <img src="/logo.png" width="200px" />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
        target="_blank"
      >
        <img src="/google-play.png" width="200px" />
      </a>
    </div>
  </div>
)
