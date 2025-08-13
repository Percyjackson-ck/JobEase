import React, { Component } from "react";
import JobSeekerData from "./JobSeekerData";
import { Container } from "react-bootstrap";
import styles from "../../../CSS/ModernProcedure.module.css";
import { withTranslation } from "react-i18next";

// extends: Inheritance uses the keyword extends to allow any component to use the properties and methods of another component connected with the parent. Using the extends keyword, you can allow the current component to access all the component's properties, including the function, and trigger it from the child component.
//  In function component we cannot include life cycle method directly and can be implemented using hooks.
class KnowAbout extends Component {
  constructor() {
    super();
    // Source: https://www.knowledgehut.com/blog/web-development/understanding-constructors-with-react-components
    // It is necessary to call super() within the constructor. To set property or use 'this' inside the constructor it is mandatory to call super().We should always include super() in order to use the parent class methods and properties.
    //Never Call API inside constructor.API is used in component did mount method
    this.state = {
      JobSeekerData,
    };
    // We must remember that the setState() method cannot be used directly in the constructor(). Use 'this.state' to assign the initial state in the constructor. The constructor uses this.state to assign initial state, and other methods should use set.state().
  }

  render() {

    // Render method: HTML Execute krke return krna and when any state or prop is changed then the render method is called automatically also at the creation of component render method is called at the beginning

    const { t } = this.props;
    // let JobSeekerData = this.state.JobSeekerData.map((data) => {
    //   return <JobSeekerCard key={data.id} data={data} />;
    // });

    return (
      <div className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 id="howwework" className={styles.Heading}>
            {t("How we work for")}
            <span className={styles.About}> {t("Job Seeker")} </span>?
          </h2>
          <div className={styles.Row}>
            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/user.png")}
                  alt="Register"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Register")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Create your profile with basic details")}
                </p>
              </div>
            </div>
            
            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/search.png")}
                  alt="View Jobs"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("View Jobs")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Browse available job opportunities")}
                </p>
              </div>
            </div>

            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/check.png")}
                  alt="Apply"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Apply")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Apply to jobs with one click")}
                </p>
              </div>
            </div>

            <div className={styles.Box}>
              <div className="card">
                <img
                  src={require("../../../Assets/thumb.png")}
                  alt="Get Hired"
                  className={styles.CardImage}
                />
                <h4 className={styles.CardTitle}>
                  {t("Get Hired")}
                </h4>
                <p className={styles.CardDescription}>
                  {t("Receive job offers and start working")}
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
