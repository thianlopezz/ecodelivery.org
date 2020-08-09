import React from "react"
import styles from "./about.module.css"

export default () => (
  <div style={{ textAlign: "center" }}>
    <img src="/logo.png" width="200px" />
    {/* <h1 className={styles.headline}>
      Ecodelivery <br /> Galápagos
    </h1> */}
    <p className={styles.underline}>Tu pide, nosotros lo hacemos por ti.</p>
    <p className={styles.underline}>¡Ya estamos aquí!.</p>
  </div>
)
