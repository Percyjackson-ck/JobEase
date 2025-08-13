import React, { useState, useEffect } from "react";
import styles from "../../../CSS/ModernNavbar.module.css";
import { Navbar as BootstrapNavbar, Nav, Tooltip, OverlayTrigger, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

import LanguageSelector from "../../LanguageSelector/language.js";
import { withTranslation } from "react-i18next";
import { HiMicrophone, HiMenu, HiX } from "react-icons/hi";
import SpeechRecognition from "react-speech-recognition";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click and Speak to Navigate
  </Tooltip>
);

const Navbar = ({ t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BootstrapNavbar 
      fixed="top" 
      expand="lg" 
      className={`${styles.NavBar} ${scrolled ? styles.scrolled : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand className={styles.Logo}>
          <RouteLink to="/" className={styles.Brand}>
            {t("Job")}
            <span className={styles.brandAccent}>{t("sy")}</span>
          </RouteLink>
        </BootstrapNavbar.Brand>

        <div className={styles.navbarActions}>
          <LanguageSelector position="navbar" />
          
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <div className={styles.microphoneWrapper}>
              <HiMicrophone
                className={styles.microphone}
                onClick={SpeechRecognition.startListening}
              />
            </div>
          </OverlayTrigger>

          <BootstrapNavbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className={styles.navbarToggler}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </BootstrapNavbar.Toggle>
        </div>

        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ml-auto ${styles.navLinks}`}>
            <Link 
              activeClass={styles.active}
              smooth={true} 
              duration={1000} 
              to="home"
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("Home")}
            </Link>
            <Link 
              smooth={true} 
              offset={-90} 
              duration={1000} 
              to="categories"
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("Categories")}
            </Link>
            <Link 
              smooth={true} 
              offset={-190} 
              duration={1000} 
              to="howwework"
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("How We Work?")}
            </Link>
            <Link 
              smooth={true} 
              offset={-90} 
              duration={1000} 
              to="contact"
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("Contact Us")}
            </Link>
            <RouteLink 
              to="/user/register" 
              className={styles.registerBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("Register")}
            </RouteLink>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default withTranslation()(Navbar);
