import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import styles from "../../../../CSS/ModernForm.module.css";
import { withTranslation } from "react-i18next";
class UserProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      phoneNumber: "",
      aadharNumber: "",
      category: "",
      YOE: "",
      otherSkills: "",
      currentLocation: "",
      availability: "",
      messageForRecruiter: "",
    };
  }

  handleChange = (event) => {
    let itemValue = event.target.value;
    let itemName = event.target.name;
    this.setState({
      [event.target.name]: itemValue,
    });

    if(itemName == "phoneNumber" && itemValue.length < 10) {
      document.getElementById('phoneNumber').style.display = "block";
    } else {
      document.getElementById('phoneNumber').style.display = "none";
    }
    if(itemName == "aadharNumber" && itemValue.length < 12) {
      document.getElementById('aadharNumber').style.display = "block";
    } else {
      document.getElementById('aadharNumber').style.display = "none";
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
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

    let newUser = {
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      aadharNumber: this.state.aadharNumber,
      category: englishCategory,
      YOE: this.state.YOE,
      otherSkills: this.state.otherSkills,
      currentLocation: this.state.currentLocation,
      availability: this.state.availability,
      messageForRecruiter: this.state.messageForRecruiter,
    };
    // console.log(newUser);

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/register`, {
        username: this.state.username,
        phoneNumber: this.state.phoneNumber,
        aadharNumber: this.state.aadharNumber,
        category: englishCategory,
        YOE: this.state.YOE,
        otherSkills: this.state.otherSkills,
        currentLocation: this.state.currentLocation,
        availability: this.state.availability,
        messageForRecruiter: this.state.messageForRecruiter,
      })
      .then((response) => {
        console.log("SUBMITTTING USER PROFILE", response);
        const data = response.data;
        this.setState({ data });
        alert("Your profile is now visible to Recruiters");

        this.setState({
          username: "",
          phoneNumber: "",
          aadharNumber: "",
          category: "",
          YOE: "",
          otherSkills: "",
          currentLocation: "",
          availability: "",
          messageForRecruiter: "",
        });
      })
      .catch((error) => {
        console.log(error);
        // alert("Invalid Input");
      });

    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 1000);
  };

  render() {
    const { t } = this.props;
    const {
      username,
      phoneNumber,
      aadharNumber,
      category,
      YOE,
      otherSkills,
      currentLocation,
      availability,
      messageForRecruiter,
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
            {t("Create Your Profile")}
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#6B7280", 
            fontWeight: "500",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            {t("Fill out your details below to create a professional profile and get discovered by employers")}
          </p>
        </div>

        <Form onSubmit={this.handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", background: "rgba(255, 255, 255, 0.9)", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)", backdropFilter: "blur(10px)" }}>
          
          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="username"
              value={username}
              placeholder={t("Username")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder={t("Phone Number")}
              maxLength="10"
              onChange={this.handleChange}
              required
            />
            <p id="phoneNumber" className={styles.ErrorMessage}>* Enter a 10 digit number</p>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="aadharNumber"
              value={aadharNumber}
              placeholder={t("Aadhar Number")}
              maxLength="12"
              onChange={this.handleChange}
              required
            />
            <p id="aadharNumber" className={styles.ErrorMessage}>* Enter a 12 digit number</p>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              as="select"
              className={styles.Input}
              name="category"
              value={category}
              defaultValue="Choose Category"
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
              className={styles.Input}
              type="text"
              name="YOE"
              value={YOE}
              placeholder={t("Years of Experience")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="otherSkills"
              value={otherSkills}
              placeholder={t("Any Other Skill?")}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="currentLocation"
              value={currentLocation}
              placeholder={t("Current Location")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              className={styles.Input}
              type="text"
              name="availability"
              value={availability}
              placeholder={t("Date of Availability (YYYY/MM/DD)")}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Control
              as="textarea"
              rows={4}
              className={styles.Input}
              name="messageForRecruiter"
              value={messageForRecruiter}
              placeholder={t(
                "Anything you want to share with the recruiter..."
              )}
              onChange={this.handleChange}
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

export default withTranslation()(UserProfileForm);
