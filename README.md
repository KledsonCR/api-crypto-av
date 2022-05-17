# DESAFIO ## Sprint03

*Propósito do desafio é construir uma API de carteira de criptomoedas.*

## 🛠️ Ferramentas utilizadas na aplicação do desenvolvimento 

* [VSCode] Editor de código
* [Postman] Para realizar o teste de rotas por meio de métodos HTTP
* [NodeJS] Para executar o JavaScript no Backend
* [GIT] Para versionamento de código
* [MySQL] SGBD - Banco de dados relacional

## ⚙️ Executando a aplicação

1 - Baixe o projeto com o comando: git clone https://github.com/KledsonCR/api-crypto-av.git
2 - Acesse a pasta do projeto pelo editor de código da sua preferencia. 
3 - Utilize o SGBD relacional para criar um database.
4 - Altere as configurações do Banco de dados na pasta api/config/config.json
5 - Utilize o comando "npm install" para instalar as dependencias
6 - Execute o comando "npx sequelize-cli db:migrate" para criar as tabelas e depois execute o comando "npx sequelize-cli db:seed:all" para popular as mesmas.
7 - Execute o comando "npm run start" para rodar a aplicação.
8 - Utilize o Postman para testar as rotas GET, POST, PUT e DELETE.

## URL's

* GET: http://localhost:3000/api/v1/wallet
* GET: http://localhost:3000/api/v1/wallet/:address
* POST: http://localhost:3000/api/v1/wallet
* PUT: http://localhost:3000/api/v1/wallet/:address
* DELETE: http://localhost:3000/api/v1/wallet/:address

