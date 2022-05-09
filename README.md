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
* Jest
* Nodemailer (serviço de envio de email).
* Mailtrap (serviço sandbox de-mail).
* **[@Heroku](https://https://heroku.com/)** utilizado para deploy

![feedback 02 - Mailtrap](https://user-images.githubusercontent.com/54412289/167509722-c4f85921-acbc-477c-adaa-0808897e4579.png)

Iniciar Servidor:
* cd server
* Criar uma conta projeto em  **[@Mailtrap](https://https://mailtrap.io/)**
* Pegar a config necessária dos dados do projeto (user e password) para ser feito a integração com backend
![feedback 01 - config integration mailtrap](https://user-images.githubusercontent.com/54412289/167509680-7a502b88-731e-4f0a-a116-91a63633159e.png)
* Alterar user e pass do mailtrap em src/adapters/nodemailer/nodemailer-mail-adapter.ts
* ![feedback 03 - nodemailer-mail-adapter](https://user-images.githubusercontent.com/54412289/167510432-0546762d-1a37-4582-ad86-0011901c9620.png)
* npm run dev
* npx prisma studio

Obs: caso queira, testar local, trocar em server/prisma/schema.prisma o tipo de bando de dados para provider = "sqlite" e exeuctar as migrations com o seguinte comando "npx prisma migrate dev"
![feedback 05 - schema-prisma](https://user-images.githubusercontent.com/54412289/167510418-e367e906-79dc-4279-903e-d9fb4b0ab3f9.png)


https://github.com/laerthnardelli/nlw-return-web
https://github.com/laerthnardelli/nlw-return-mobile
