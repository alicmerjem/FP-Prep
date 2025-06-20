class NotificationService {
    constructor(mailer) {
        this.mailer = mailer;
    }

    send(user, message) {
        return this.mailer.sendEmail(user, message);
    }
}