import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

//http://localhost:3333/feedbacks
routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedBacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedBacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });
  } catch (error) {
    console.log(error);
  }

  return res.status(201).send();
});

// export const routes = express.Router();

// routes.post("/feedbacks", async (req, res) => {
//   const { type, comment, screenshot } = req.body;

//   try {
//     const prismaFeedBacksRepository = new PrismaFeedbacksRepository();
//     const nodemailerMailAdapter = new NodemailerMailAdapter();

//     const submitFeedbackUseCase = new SubmitFeedbackUseCase(
//       prismaFeedBacksRepository,
//       nodemailerMailAdapter
//     );

//     await submitFeedbackUseCase.execute({
//       type,
//       comment,
//       screenshot,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send();
//   }

//   return res.status(201).send();
// });
