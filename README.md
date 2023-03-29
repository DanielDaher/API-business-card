# API-business-card
Boas vindas ao Business Card, o App que gera um cartão virtual para você!

## Objetivos:

O objetivo do projeto é gerar um QR Code que redirecione para uma página com as principais informações profissionais do usuário.

## Para acessar e utilizar a aplicação em produção:
[Business-Card](https://business-card-danieldaher.vercel.app/)

## Funcionalidades da aplicação

A aplicação está em inglês, mas basta pedir para que o navegador traduza que continuará funcionando perfeitamente.

A primeira tela é um formulário que pede nome, linkedin e github de uma pessoa. Uma vez que os campos estejam preenchidos, é possível gerar um QR Code que redireciona para um cartão virtual daquela pessoa. Ao mesmo tempo, este cadastro acessa a [API-business-card](https://github.com/DanielDaher/API-business-card) e registra as informações em um banco de dados. 

É possível fazer download do QR Code, mas se preferir, basta clicar no mesmo que o site te redireciona para o cartão com as informações inseridas.

A página principal, que é o cartão, é programada para puxar as informações do github inserido no formulário. Isso acontece através de uma chamada da API do Github, graças às informações anteriormente salvas no banco de dados (e resgatadas com o ID da URL). 

Mostra-se então o nome da pessoa, foto de perfil, cidade onde mora, descrição e botões úteis que redirecionam para Github, Linkedin, Email e Twitter (os dois últimos apenas se a informação estiver no perfil).

Caso a pessoa não tenha inserido uma URL válida, este cartão apresentará apenas o nome e os botões que redirecionam ao Linkedin e Github.

## Caso prefira rodar a aplicação no computador:

#### Seu computador precisa de Git (para versionamento do código), Node.js & npm (para executar a aplicação) e MongoDB (que será nosso banco de dados). Clique nos links, caso ainda não tenha instalado algum desses:

 - [ ] [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 - [ ] [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 - [ ] [MongoDB](https://docs.mongodb.com/manual/installation/)
 
 - O **MongoDB** precisa estar ativo para que a aplicação funcione. Digite o seguinte comando no terminal, para verificar isso:
`sudo service mongod status`.

  Caso a propriedade **Active** não esteja como *Active(running)* digite no terminal `sudo service mongod start`. Talvez o sistema te peça sua senha de usuário. Basta digitar, sabendo que os caracteres de senha não aparecem no terminal.

Agora sim estamos prontos para instalar o projeto.

## Instalando a aplicação:

1. Primeiro, abra um novo terminal e clone o repositório utilizando o comando 
`git clone git@github.com:DanielDaher/API-business-card.git`

2. Em seguida, digite `cd API-business-card` para entrar no diretório (pasta) do projeto, que acabou de ser criada.

3. Instale as dependências do projeto com o comando `npm install`

4. Crie, na raiz do projeto, um arquivo com o nome `.env` e coloque a seguinte variável): `MONGO_URL=mongodb://127.0.0.1:27017` Salve as modificações!

5. Com o comando `npm run dev`, o backend da aplicação já estará funcionando. Aguarde alguns segundos, que o terminal mostrará a mensagem "Ouvindo a porta 3000", o que significa que está tudo certo. Lembrando que, para executar este passo é necessário que seu MongoDB esteja ativo.
