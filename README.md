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

![feedback 02 - Mailtrap](https://user-images.githubusercontent.com/54412289/167509722-c4f85921-acbc-477c-adaa-0808897e4579.png)<br/>

##Iniciar Servidor:
* cd server
* Criar uma conta projeto em  **[@Mailtrap](https://https://mailtrap.io/)**
* Pegar a config necessária dos dados do projeto (user e password) para ser feito a integração com backend<br/>

![feedback 01 - config integration mailtrap](https://user-images.githubusercontent.com/54412289/167509680-7a502b88-731e-4f0a-a116-91a63633159e.png)<br/>
* Alterar user e pass do mailtrap em src/adapters/nodemailer/nodemailer-mail-adapter.ts <br/>
![feedback 03 - nodemailer-mail-adapter](https://user-images.githubusercontent.com/54412289/167510432-0546762d-1a37-4582-ad86-0011901c9620.png)
* npm run dev (subir o server)
![feedback 07 - server running e feedback enviado](https://user-images.githubusercontent.com/54412289/167512788-9d99a885-831d-441b-99f7-bf5056487c7c.png) <br/>
* npx prisma studio (visualizar os feedback enviados)<br/>
![feedback 06 - prisma-studio](https://user-images.githubusercontent.com/54412289/167512833-86417a6f-b1f2-4fc6-a638-4bc3c985472a.png)<br/><br/>
* npm run test (executar test com jest)<br>
![feedback 08 - test-jest](https://user-images.githubusercontent.com/54412289/167513742-585b60c2-5207-455a-8154-00f141e55792.png)<br/>


Obs1: caso queira, executar api local, trocar em server/prisma/schema.prisma o tipo de bando de dados para provider = "sqlite" e exeuctar as migrations com o seguinte comando "npx prisma migrate dev" <br/>
![feedback 05 - schema-prisma](https://user-images.githubusercontent.com/54412289/167510418-e367e906-79dc-4279-903e-d9fb4b0ab3f9.png)

obs2: caso queira fazer o deploy, converter os arquivos de TS para JS com seguinte comando: npx tsc <br/>

https://github.com/laerthnardelli/nlw-return-web<br/>
https://github.com/laerthnardelli/nlw-return-mobile
