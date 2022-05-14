# Feedget

Aplicação desenvolvida durante a semana do NLW Return, que visa facilitar o envio de feedbacks sobre o sistema usado.

<p align="center">
   <img src="https://github.com/fanuelcouto99/Feedback-Widget/blob/main/img/feedget.png" width="900">
</p>

<hr>

### :scroll: Sobre o projeto

<p>Projeto para aprendizagem, construção de uma aplicação para envio de feedbacks sobre o sistema que está sendo usado. Podendo ser escolhido 3 tipos de feedback.</p>
<p>Ao enviar a aplicação também faz o envio de um e-mail, com os dados do feedback. Passa esse projeto foi usado o Mailtrip como serviço de teste de envio.</p>
<p>Para o desenvolvimento do projeto, foram criadas três aplicações, a primeira usando NodeJs para a construção do servidor, a segunda usando React para a criado da aplicação web.</p> 
<p>E por fim, usando o expo foi feita a aplicação para mobile.
No projeto foi usado também CSS, criado especificamente para ele, usando TailwindCSS.</p>

<p align="center">
   <img src="https://github.com/fanuelcouto99/Feedback-Widget/blob/main/img/openFeedback.png">
</p>

Abrindo o campo para selecionar o tipo de feedback.

<p align="center">
   <img src="https://github.com/fanuelcouto99/Feedback-Widget/blob/main/img/abrindo-botao.gif">
</p>

Enviando um feedback.

<p align="center">
   <img src="https://github.com/fanuelcouto99/Feedback-Widget/blob/main/img/demonstrando.gif">
</p>

Verificando o recebimento do e-mail com feedback.

<p align="center">
   <img src="https://github.com/fanuelcouto99/Feedback-Widget/blob/main/img/email.gif">
</p>

### :rocket: Executando o projeto

<p>Primeiramente é preciso instalar as dependências necessárias para o projeto, para isso basta acessar as pastas server e web pelo terminal, e em ambas, executar o install.</p>

```bash
  npm install
```

### :rocket: Executando o projeto para mobile

<p>Para a aplicação mobile também é preciso instalar as dependências necessárias, para isso basta acessar a pasta mobile pelo terminal, e executar o install.</p>

```bash
  expo install
```

### :factory: Executando o servidor (Aplicação em NodeJs)

<p>Acessar a pasta server e alterar o arquivo .env com as configurações de base de dados local. Para o projeto está configurado uma base de dados em Sqlite3, disponibilizada junto com o projeto.</p> 

<p>Para a conexão com o banco de dados, foi utilizado o Prisma, entretanto ele também suporta outros tipos de banco de dados. Mais informações na documentação http://prisma.io/</p>

<!-- <p align="center">
   <img src="https://github.com/fanuelcouto99/rickAndMorty/blob/main/img/knexfile.png">
</p> -->

<p>Configurado a base de dados, ou usado a que está no projeto, só será preciso executar o comando abaixo na pasta server, para que o servidor fique rodando, ele funciona na porta 3333</p>

```bash
  npm run dev
```

### :computer: Executando o Frontend (React)

<p>Na aplicação react só será preciso executar o start na pasta web, e a aplicação será carregada.</p>

```bash
  npm run dev
```

### :computer: Executando o Mobile (Aplicação em Expo)

<p>Na aplicação mobile só será preciso executar o start na pasta mobile, e a aplicação será carregada.</p>

```bash
  expo start
```