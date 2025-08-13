class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUser(req, res, next) {
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
    } = req.body;

    // console.log("Reached controller");
    // console.log(req.body);
    try {
      const user = await this.userService.createUser(
        username,
        phoneNumber,
        aadharNumber,
        category,
        YOE,
        otherSkills,
        currentLocation,
        availability,
        messageForRecruiter
      );
      return res.status(201).json({
        data: user,
      });
    } catch (err) {
      console.log("Error being sent from backend", err);
      
      // Handle duplicate Aadhar number error
      if (err.code === 11000 && err.keyPattern && err.keyPattern.aadharNumber) {
        return res.status(400).json({
          error: "A user with this Aadhar number already exists. Please use a different Aadhar number."
        });
      }
      
      return res.status(400).json({
        error: err.message || "An error occurred while creating the user."
      });
    }
  }
}

module.exports = UserController;
