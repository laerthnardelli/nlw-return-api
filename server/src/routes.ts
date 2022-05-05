import express from "express";
import nodemailer from "nodemailer";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "46129e23098a1b",
//     pass: "5894054a61dd85",
//   },
// });

//http://localhost:3333/feedbacks
routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedBacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedBacksRepository
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  //   await transport.sendMail({
  //     from: "Equipe Feedget <oi@feedgat.com>",
  //     to: "Laérth Nardelli <laerthnardelli@gmail.com>",
  //     subject: "Novo feedback",
  //     html: [
  //       `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
  //       `<p>Tipo do feedback: ${type}</p>`,
  //       `<p>Comentário: ${comment}</p>`,
  //       `</div>`,
  //     ].join("\n"),
  //   });

  return res.status(201).send();
});
