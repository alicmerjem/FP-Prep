// you are integrating a legacy notification system
// it accepts messages in the following format:
// sendLegacymessage(userId, title, body)
// write a function that is a facade

function sendAlert(alertData) {
    const userId = alertData.user;
    const title = alertData.message.heading;
    const body = alertData.message.content;

    console.log("Logging alert data:", alertData);
    console.log("the formatted message which i am way too lazy to type out");

    sendLegacyMessage(userId, title, body);
}