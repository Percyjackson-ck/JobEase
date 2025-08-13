const { twilio_sid, twilio_auth_token, admin_phone } = require("../config");

let client = null;

// Only initialize Twilio client if credentials are properly configured
if (twilio_sid && twilio_auth_token && twilio_sid.startsWith('AC')) {
  try {
    client = require("twilio")(twilio_sid, twilio_auth_token);
  } catch (error) {
    console.log("Twilio initialization failed:", error.message);
  }
}

function sms(to, msg) {
  if (!client) {
    console.log("SMS service not configured. Message would be sent to:", to, "Message:", msg);
    return;
  }
  
  client.messages
    .create({
      body: msg,
      from: admin_phone,
      to: to,
    })
    .then((message) =>
      console.log("Message successfully sent! Message SID: ", message.sid, to)
    )
    .catch((err) => {
      // cannot redirect here because it is asynchronous
      console.log("Message couldn't be sent. Error: ", err);
    });
}

module.exports = sms;
