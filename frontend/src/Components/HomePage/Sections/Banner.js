import React from "react";
import styles from "../../../CSS/ModernHomePage.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
// Jumbotron: was introduced in Bootstrap 3 as a big padded box for calling extra attention to some special content or information.A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
import { Link } from "react-router-dom";

// Router: The Router in React JS is primarily used to create Single Page Web Apps
// A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. 
import BannerImage from "../../../Assets/banner.svg";
import { withTranslation } from "react-i18next";
// Higher Order Component(HOC): Its a component which takes another component as a prop and return a component as a ouput.Suppose we want to make 3 counter namely red blue green then what we will do is firstly create one counter component which in general do the incrementation in value then we will design 3 higher order component in which we will pass props as the counter component and use only color as different style in each higher order component

function Banner({ t }) {
  return (
    <div id="home" className={styles.banner}>
      <Container className={styles.bannerContent}>
        <Row className="align-items-center min-vh-100">
          <Col md={6} lg={6} className="text-left">
            <h1 className={styles.bannerTitle}>
              {t("Job")}
              <span style={{ color: "#FACC15" }}>{t("sy")} </span>
            </h1>
            <div style={{ width: "100px", height: "4px", background: "linear-gradient(135deg, #2563EB, #FACC15)", borderRadius: "2px", marginBottom: "30px" }}></div>
            <h2 className={styles.bannerSubtitle}>
              {t("Join your hands together.")}
              <br />
              {t("Not to beg, but to welcome")}
              <br />
              {t("new opportunities!")}
            </h2>
            <Row className="mt-4">
              <Col>
                <div className={styles.modernCard} style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  <h4 className={styles.cardTitle} style={{ color: "white", fontSize: "1.3rem" }}>{t("Employer")}</h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <a href="#categories" style={{ color: "#FACC15", textDecoration: "none", fontWeight: "600" }}>{t("See available candidates")}</a>{" "}
                    {t("or")} <Link to="/jobs/post" style={{ color: "#FACC15", textDecoration: "none", fontWeight: "600" }}>{t("Post New Job")}</Link>{" "}
                    {t("if you don't find any suitable candidates")}
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.modernCard} style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  <h4 className={styles.cardTitle} style={{ color: "white", fontSize: "1.3rem" }}>{t("Job Seeker")}</h4>
                  <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <Link to="/user/register" style={{ color: "#FACC15", textDecoration: "none", fontWeight: "600" }}>{t("Register")}</Link>{" "}
                    {t("your profile and get hired or manually")}{" "}
                    <a href="#categories" style={{ color: "#FACC15", textDecoration: "none", fontWeight: "600" }}> {t("apply")}</a> {t("to jobs.")}
                  </p>
                </div>
              </Col>
            </Row>

            <a href="#categories">
              <button className={styles.sectionButton} style={{ marginTop: "30px" }}>{t("Explore")}</button>
            </a>
          </Col>
          <Col md={6} lg={6} className="text-center">
            <Image
              src={BannerImage}
              alt="BannerImage"
              fluid
              style={{ maxHeight: "500px", filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withTranslation()(Banner);
