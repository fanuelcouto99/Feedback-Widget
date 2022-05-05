import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

// Configuração para teste de envio de email usando MailTrap
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd9431569a24c4",
        pass: "40213c5f3ce1ff"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Fanuel Couto <fanuelcouto.ti@gmail.com>',
            subject,
            html: body
        });
    };
};    