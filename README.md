# API - Msb

### Bem vindo a aplicação - parte do back end

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Dotenv</li>
  <li>MySql</li>
  <li>Mocha | Chai | Sinon.js </li>
</ul>

# Instruções para iniciar o projeto

1. Clone o repositório
  * Chave SSH
    * `git clone git@github.com:GustavoSFer/msb-back-end.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd msb-back-end`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeestaODockerFile'>
  * Exemplo
``` docker build -t msb . ```
2. Crie o container no docker
  * docker container run -p 3001:3001 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 msb ```

## Observação: Banco de dados Utilizado no projeto MySQL. Certifique-se que ja tenho em seu computador ou rodando em um container Docker
 -- Link: https://hub.docker.com/_/mysql


### Conexão com o Banco:

**⚠️ IMPORTANTE! ⚠️**

```javascript
const connection = mysql.createPool({
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
});
```
Para os testes rodarem corretamente, na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3001
```