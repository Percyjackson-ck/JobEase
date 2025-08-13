import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../CSS/ModernHomePage.module.css";
import { useTranslation } from "react-i18next";

const KnowAbout = (props) => {
  const { t } = useTranslation();
  return (
    <div id="knowAbout" className={styles.categoryCard}>
      <div className={styles.categoryIcon}>
        <img
          src={require("../../../Assets/electrician.png")}
          alt="Image"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
      </div>
      <h4 className={styles.categoryTitle}>
        {props.knowAbout.name}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
        <Link to={props.knowAbout.jobLink} className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center" }}>
          {t("View Jobs")}
        </Link>
        <Link to={props.knowAbout.candLink} className={styles.sectionButton} style={{ padding: "12px 20px", fontSize: "14px", textAlign: "center", background: "linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)", color: "#1F2937" }}>
          {t("View Candidates")}
        </Link>
      </div>
    </div>
  );
};

export default KnowAbout;
