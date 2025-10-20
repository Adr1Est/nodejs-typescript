import { envs } from "./plugins/envs.plugin";
import { EmailService } from "./services/email.service";

const main = (): void => {
  console.log(envs.PORT);
  console.log(envs.MAILER_SERVICE);
  console.log(envs.MAILER_EMAIL);
  console.log(envs.MAILER_SECRET_KEY);
  console.log(envs.PROD);
  // const emailService = new EmailService();
  // emailService.sendEmailWithPicture(['adrian22est@gmail.com', 'adrianestevezsalamanca@gmail.com']);
  // emailService.sendEmail({
  //   to: 'adrianestevezsalamanca@gmail.com',
  //   subject: 'Prueba nodemailer',
  //   htmlBody: `
  //     <h3>TEST</h3>
  //     <p>Esto es una prueba de correo electrónico enviado con nodemailer</p>
  //   `
  // });
}

(() => {

  main();

})();