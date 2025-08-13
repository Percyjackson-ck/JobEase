import React, { Component } from "react";
import axios from "axios";

// Axios is an HTTP client library that allows you to make requests to a given endpoint
// In React communicating with the backend server is done via HTTP protocol. If you’re a developer, then you might have been familiar with the XML Http Request interface and Fetch API. It allows you to fetch data and make HTTP requests.This one is the common method to communicate with the database in React. In React there is another method to communicate with the backend server and that requires the installation of a popular library Axios. 
// Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project. 
// Axios provide you more functionality and features and that helps you in building your application quickly. 
// Axios: https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/
// When we use fecth api to get the data of any site then using fetch() method we first get the response and then we convert that response to json. But with axios we directly get the data in the form of json
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/ModernForm.module.css";
import { withTranslation } from "react-i18next";

class PostJobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      recruiterEmailId: "",
      recruiterPhoneNumber: "",
      category: "",
      description: "",
      location: "",
      offeredSalary: "",
      numberOfPositions: "",
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    let itemName = event.target.name;
    this.setState({
      [event.target.name]: itemValue,
    });

    if(itemName == "recruiterPhoneNumber" && itemValue.length < 10) {
      document.getElementById('recruiterPhoneNumber').style.display = "block";
    } else {
      document.getElementById('recruiterPhoneNumber').style.display = "none";
    }
  };
 
  handleSubmit = (event) => {
    event.preventDefault(); //stop the default function of button and provide validation before the link or a form get submitted.
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when:
// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
    // const role = this.state.category;
    // console.log("From handleSubmit", this.state.category);
    let englishCategory = "OTHERS";
    if (this.state.category === "बिजली कारीगर") englishCategory = "ELECTRICIAN";
    else if (this.state.category === "नलकार") englishCategory = "PLUMBER";
    else if (this.state.category === "क्रियाविधि") englishCategory = "MECHANIC";
    else if (this.state.category === "बावरची") englishCategory = "COOK";
    else if (this.state.category === "चपरासी") englishCategory = "PEON";
    else if (this.state.category === "चालक") englishCategory = "DRIVER";
    else if (this.state.category === "नौकरानी") englishCategory = "MAID";
    else if (this.state.category === "श्रम") englishCategory = "LABOUR";
    else if (this.state.category === "सुरक्षा गार्ड") englishCategory = "SECURITY GUARD";
    else englishCategory = this.state.category;
    axios
      .post(`${process.env.REACT_APP_API_URL}/jobs`, {
        title: this.state.title,
        recruiterEmailId: this.state.recruiterEmailId,
        recruiterPhoneNumber: this.state.recruiterPhoneNumber,
        category: englishCategory,
        description: this.state.description,
        location: this.state.location,
        offeredSalary: this.state.offeredSalary,
        numberOfPositions: this.state.numberOfPositions,
      })
      .then((response) => {   //.then() is promises
        console.log(response);
        const data = response.data;
        this.setState({ data });
        alert("Job Posted");

        this.setState({
          title: "",
          recruiterEmailId: "",
          recruiterPhoneNumber: "",
          category: "",
          description: "",
          location: "",
          offeredSalary: "",
          numberOfPositions: "",
        });
      })
      .catch((error) => {   //Error handling
        console.log(error);
        // alert("Invalid Input");
      });
      // async await is used in place of complex axios code+error-handling
    // setTimeout(() => {
    //   window.location.href = `/jobs/${role.toLowerCase()}`;
    // }, 1000);
  };

  render() {
    const { t } = this.props;
    const {
      title,
      recruiterEmailId,
      recruiterPhoneNumber,
      category,
      description,
      location,
      offeredSalary,
      numberOfPositions,
    } = this.state;

    return (
      <div style={{ marginBottom: "80px", padding: "40px", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", minHeight: "100vh" }}>
        {/* Form Header Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "700", 
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "15px",
            fontFamily: "Poppins, sans-serif"
          }}>
            {t("Post a Job")}
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#6B7280", 
            fontWeight: "500",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            {t("Create a job posting to find the perfect candidates for your open positions")}
          </p>
        </div>

        <Form onSubmit={this.handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", background: "rgba(255, 255, 255, 0.9)", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)", backdropFilter: "blur(10px)" }}>
          

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              placeholder={t("Your Name / Company Name")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="email"
              name="recruiterEmailId"
              value={recruiterEmailId}
              placeholder={t("Email")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="recruiterPhoneNumber"
              value={recruiterPhoneNumber}
              placeholder={t("Contact Number")}
              maxLength="10"
              onChange={this.handleChange}
              required
            />
            <p id="recruiterPhoneNumber" className={styles.ErrorMessage}>* Enter a 10 digit number</p>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              as="select"
              className={styles.Input}
              name="category"
              value={category}
              onChange={this.handleChange}
              required
            >
              <option> {t("Choose Category")} </option>
              <option> {t("ELECTRICIAN")} </option>
              <option> {t("PLUMBER")} </option>
              <option> {t("MECHANIC")} </option>
              <option> {t("COOK")} </option>
              <option> {t("PEON")} </option>
              <option> {t("DRIVER")} </option>
              <option> {t("MAID")} </option>
              <option> {t("LABOUR")} </option>
              <option> {t("SECURITY GUARD")} </option>
              <option> {t("OTHERS")} </option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              as="textarea"
              rows={4}
              className={styles.Input}
              name="description"
              value={description}
              placeholder={t("Short Description")}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="location"
              value={location}
              placeholder={t("Location")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="offeredSalary"
              value={offeredSalary}
              placeholder={t("Offered Salary (Per Month)")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="numberOfPositions"
              value={numberOfPositions}
              placeholder={t("No. of Positions")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Button className={styles.Button} type="submit">
              {t("Submit")}
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withTranslation()(PostJobForm);
