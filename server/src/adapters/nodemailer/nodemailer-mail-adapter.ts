import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "46129e23098a1b",
    pass: "5894054a61dd85",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedgat.com>",
      to: "Laérth Nardelli <laerthnardelli@gmail.com>",
      subject,
      html: body,
    });
  }
}
