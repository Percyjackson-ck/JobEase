import React, { Component } from "react";
import EmployerData from "./EmployerData";
import { Container } from "react-bootstrap";
import styles from "../../../CSS/ModernProcedure.module.css";
import { withTranslation } from "react-i18next";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      EmployerData,
    };
  }

  render() {
    const { t } = this.props;
    // let EmployerData = this.state.EmployerData.map((data) => {
    //   return <EmployerCard key={data.id} data={data} />;
    // });

    return (
      <div className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 className={styles.Heading}>
            {t("How we work for")}
            <span className={styles.About}> {t("Employer")} </span>?
          </h2>
          <div className={styles.Row}>
            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/user.png")}
                  alt="Register Yourself"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Register Yourself")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Create your company profile")}
                </p>
              </div>
            </div>
            
            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/view.png")}
                  alt="View Candidates"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("View Candidates")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Browse qualified candidates")}
                </p>
              </div>
            </div>
            
            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/job.png")}
                  alt="Post Openings"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Post Openings")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Create job postings easily")}
                </p>
              </div>
            </div>

            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/check.png")}
                  alt="Get Applicants"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Get Applicants")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Receive job applications")}
                </p>
              </div>
            </div>

            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/thumb.png")}
                  alt="Shortlist & Hire"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Shortlist & Hire")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Select and hire candidates")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(KnowAbout);
