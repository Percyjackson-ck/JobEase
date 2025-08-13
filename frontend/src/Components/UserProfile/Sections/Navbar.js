import React from "react";
import styles from "../../../CSS/Navbar.module.css";
import { Navbar, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/language.js";
import { HiMicrophone } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click and Speak to Navigate
  </Tooltip>
);

function navbar({ t }) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <Link to="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          {t("Job")}
          <span style={{ color: "#2563EB" }}>{t("sy")} </span>
        </Link>
      </Navbar.Brand>

      <div className="ml-auto d-flex align-items-center" style={{ gap: "15px" }}>
        <LanguageSelector position="navbar" />
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          {/* Overlays: A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need. */}
          <HiMicrophone
            className={styles.microphone}
            onClick={SpeechRecognition.startListening}
          />
        </OverlayTrigger>
      </div>
    </Navbar>
  );
}

export default withTranslation()(navbar);
