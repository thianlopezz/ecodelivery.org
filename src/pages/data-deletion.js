import React from "react"
import styles from "./privacy-legal.module.css"

export default () => (
  <div className={styles.container}>
    <article id="english" lang="en" className={styles.article}>
      <figure>
        <img src="/logo.png" width="200px" />
      </figure>
      <section>
        <p>
          <strong>
            INSTRUCCIONES PARA LA ELIMINACIÓN DE DATOS DE USUARIOS
          </strong>
        </p>
        <p>&nbsp;</p>
        <p>
          De acuerdo con las reglas de Facebook para Apps y sitios web, debemos
          proporcionar a los usuarios de nuestra app las instrucciones a seguir
          para eliminar sus datos de usuario. Si quieres eliminar tu actividad
          relacionada a la App de Best for Pets, lo puedes hacer siguiendo estos
          pasos:
        </p>
        <p>
          <strong>Paso 1</strong>
        </p>
        <p>
          Ingresa a tu cuenta de Facebook y haz clic en “Configuración y
          privacidad”. Después haz clic en “Configuración”, entre las opciones
          de la izquierda selecciona "Seguridad e inicio de sesión".
        </p>
        <p>
          <img src="/deletion/1.png" width="100%" />
        </p>
        <p>
          <strong>Paso 2</strong>
        </p>
        <p>
          Ve a la sección de “Apps y sitios web”, donde podrás ver toda tu
          actividad relacionada a aplicaciones y páginas web registradas en tu
          cuenta de Facebook. Selecciona la casilla situada a la derecha de la
          App Ecodelivery y haz clic en “Eliminar”.
        </p>
        <p>
          <img src="/deletion/2.png" width="100%" />
        </p>
        <p>
          <strong>Paso 3</strong>
        </p>
        <p>
          Activa o desactiva las casillas de acuerdo con tus preferencias y haz
          clic en “Eliminar”.
        </p>
        <p>
          <img src="/deletion/3.png" width="100%" />
        </p>
      </section>
    </article>
  </div>
)
