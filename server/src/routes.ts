import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();

// Configuração para teste de envio de email usando MailTrap
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd9431569a24c4",
        pass: "40213c5f3ce1ff"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    });

    // Envio de email
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Fanuel Couto <fanuelcouto.ti@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p> Tipo do feedback: ${type}</p>`,
            `<p> Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({ data: feedback });
});