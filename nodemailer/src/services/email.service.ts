import nodemailer from 'nodemailer';
import { envs } from '../plugins/envs.plugin';

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements: Attachement[];
}

interface Attachement{
  filename: string;
  path: string;
}

export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    }
  });  

  async sendEmail(options: SendMailOptions): Promise<boolean> {

    const { to, subject, htmlBody, attachements = [] } = options;

    try{
      const sendInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
      });

      console.log(sendInformation);

      return true;
    }catch(error){

      return false;
    }

  }

  sendEmailWithPicture( to: string | string[] ){
    const subject = 'Email with pic';
    const htmlBody = `
      <h3>TEST</h3>
      <p>Esto es una prueba de correo electrónico enviado con nodemailer</p>
      <p>Con imagen adjunta</p>
    `;
    const attachements: Attachement[] = [
      { filename: 'github.png',path: './src/assets/github.png' },
    ];

    this.sendEmail({ to, subject, attachements, htmlBody });
  }
}