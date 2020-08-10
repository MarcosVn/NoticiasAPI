# A API
API RESTful simples com Nodejs, Express e MongoDB para cadastro de noticias proposto em desafio fullstack

# Pré-requisitos
- [MongoDB]
- [NodeJS]

# Stack utilizada da API
- [NodeJS]
- [Express]
- [Mongoose] (MongoDB)
- [JWT]
- [Dotenv]

# Instalar dependências
```sh
$ npm install
```

# Configurações
```sh
$ cp .env-example .env
```

- Definir a conexão com o mongodb na variável _DB_URL_, localmente ou de um serviço externo como no caso do [mLab]: 'mongodb://user:pass@data.mlab.com:port/noticias'.

# Executar projeto
```sh
$ node bin/www
```

- ou com [nodemon]

```sh
$ npx nodemon
```

[MongoDB]: <https://www.mongodb.com/>
[NodeJS]: <https://nodejs.org>
[Express]: <https://expressjs.com/>
[Mongoose]: <https://mongoosejs.com/>
[JWT]: <https://github.com/auth0/node-jsonwebtoken>
[Dotenv]: <https://github.com/motdotla/dotenv>
[mLab]: <mlab.com>
[nodemon]: <https://nodemon.io/>
