import React from "react"
import Particles from "react-particles-js"
// import styles from "./app.module.css"
import particleOptions from "../../assets/particles.json"
import styles from "./index.module.css"

export default () => (
  <>
    <Particles className={styles.particles} params={particleOptions} />
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div style={{ textAlign: "center" }} className={styles.contenido}>
          <h2>
            <a
              style={{ color: "#FFFFFF" }}
              href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
              target="_blank"
            >
              ¡Ya estamos aquí!
            </a>
          </h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
            target="_blank"
          >
            <img src="/logo.png" width="200px" />
          </a>

          <h1>
            <a
              style={{ color: "#FFFFFF" }}
              href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
              target="_blank"
            >
              Descarga la App
            </a>
          </h1>

          <a
            href="https://play.google.com/store/apps/details?id=com.ecodelivery.market.app"
            target="_blank"
          >
            <img src="/google-play.png" width="200px" />
          </a>
        </div>
      </div>
    </div>
  </>
)
