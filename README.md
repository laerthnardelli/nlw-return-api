Projeto Next Level Week 8 - Return

![nlw-return](https://user-images.githubusercontent.com/54412289/167460506-97d826c3-45b1-4c60-93fa-8e32dafa4a32.png)


O projeto do evento, tem a finalidade de um botão flutuante de enviar feedback, com comentário e uma screenshot da tela. O feedback pode ser represendado por problema, ideia, ou Outro. Após o envio do feedback, será registrado no banco de dados, e enviado um e-mail para o responsável da aplicação.<br/>
Esse evento foi ministrado pela @Rocketseat

Tecnologias Utilizadas:

* Typescript
* NodeJS
* Prisma
* Postgresql
* Express
* Axios
* Nodemailer (serviiço de envio de email).
* Mailtrap (envio de e-mail).

Deploy do backend no @Heroku e frontend na @Vercel.

link do deploy na vercel: https://nlw-return-web-git-main-laerthnardelli.vercel.app/

Iniciar Servidor:
* cd server
* Criar uma conta projeto em  **[@Mailtrap](https://https://mailtrap.io/)**
* Pegar a config necessária dos dados do projeto (user e password) para ser feito a integração com backend
![feedback 05 - config integration mailtrap](https://user-images.githubusercontent.com/54412289/167466110-b4ee7739-c38e-4cdc-bdf6-5cb64986f28b.png)
* Alterar user e pass do mailtrap em src/lib/api para seu ipv4 src/adapters/nodemailer/nodemailer-mail-adapter.ts
* npm run dev
* npx prisma studio
