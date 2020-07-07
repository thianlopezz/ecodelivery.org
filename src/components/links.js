import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import styles from "./links.module.css"
import Fb from "../../assets/icons/fb.svg"
import Ig from "../../assets/icons/ig.svg"
import LinkedIn from "../../assets/icons/linkedIn.svg"
import Mail from "../../assets/icons/mail.svg"

export default () => (
  <div className={styles.links}>
    {/* <OutboundLink href="https://github.com/Safi1012" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
      <GitHub alt="GitHub icon" />
    </OutboundLink> */}

    {/* <OutboundLink
      href="https://shrinkme.app"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to my side project named Shrink Me"
    >
      <ShrinkMe alt="Shrink Me icon" />
    </OutboundLink> */}

    <OutboundLink
      href="https://www.facebook.com/ecodeliverygalapagos"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to Fb profile"
    >
      <Fb alt="Fb icon" />
    </OutboundLink>

    <OutboundLink
      href="https://www.instagram.com/ecodelivery.galapagos"
      rel="noopener noreferrer"
      aria-label="Link to Ig profile"
    >
      <Ig alt="Ig icon" />
    </OutboundLink>
  </div>
)
