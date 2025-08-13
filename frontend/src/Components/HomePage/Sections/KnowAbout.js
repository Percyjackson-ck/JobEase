import React, { Component } from "react";
import KnowAboutData from "./KnowAboutData";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styles from "../../../CSS/ModernHomePage.module.css";
import { withTranslation } from "react-i18next";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      KnowAboutData,
    };
  }

  render() {
    const { t } = this.props;
    // let KnowAboutData = this.state.KnowAboutData.map((knowAbout) => {
    //   return <KnowAboutCard key={knowAbout.id} knowAbout={knowAbout} />;
    // });

    return (
      <div style={{ 
        padding: "80px 0", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background texture similar to home page */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>') repeat`,
          animation: "float 20s infinite linear"
        }}></div>
        
        <Container fluid="sm" style={{ position: "relative", zIndex: 2 }}>
          <h2 id="categories" className={styles.sectionHeading} style={{
            color: "white",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            {t("Categories")}
          </h2>
          <div className={styles.cardGrid} style={{ marginTop: "60px" }}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/electrician.png")}
                  alt="Electrician"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Electrician")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Electrical installations and repairs")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/electrician" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/electrician" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/plumber.png")}
                  alt="Plumber"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Plumber")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Water and drainage systems")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/plumber" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/plumber" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/mechanic.png")}
                  alt="Mechanic"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Mechanic")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Vehicle maintenance and repair")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/mechanic" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/mechanic" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/cook.png")}
                  alt="Cook"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Cook")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Food preparation and cooking")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/cooking" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/cooking" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/peon.png")}
                  alt="Peon"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Peon")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Office support and assistance")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/peon" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/peon" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/driver.png")}
                  alt="Driver"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Driver")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Transportation and delivery")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/driver" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/driver" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/maid.png")}
                  alt="House Keeping"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("House Keeping")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Cleaning and housekeeping")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/housekeeping" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="/candidates/housekeeping" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/site.png")}
                  alt="Construction Site Workers"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Construction Site Workers")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Building and construction work")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/siteworkers" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/siteworkers" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <img
                  src={require("../../../Assets/security.png")}
                  alt="Security Guard"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <h4 className={styles.categoryTitle}>{t("Security Guard")}</h4>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "14px", 
                marginBottom: "20px",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.4"
              }}>
                {t("Security and protection services")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <Link to="/jobs/securityguard" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
                  {t("View Jobs")}
                </Link>
                <Link to="candidates/securityguard" className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)", color: "white", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                  {t("View Candidates")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(KnowAbout);
