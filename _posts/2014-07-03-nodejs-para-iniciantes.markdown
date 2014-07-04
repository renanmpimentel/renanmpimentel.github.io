---
layout: post
title:  "nodejs para iniciantes"
date:   2014-07-03 20:50:00
categories: javascript
---

Há algumas semanas atrás, eu só conhecia os "Hello world" em [nodejs]. Foi então que, onde trabalho surgiu a oportunidade em fazer um novo componente, usando apenas **javascript**, e como essa aplicação seria apenas *server-side* decidimos usar o [nodejs] com [express]. 

Vou tentar passar um pouco do que estou aprendendo, mas se você tem pressa para conhecer sobre o assunto, recomendo o curso do [Suissa]: [Curso BeMEAN] e o livro do [Caio Ribeiro]: [Aplicações web real-time com Node.js]. Os dois vão te dar uma boa base sobre nodejs, express, nosql e etc, recomendo! :)

# Instalação

## Linux

**Debian e derivados** 

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```
 
**openSUSE & SLE**

```
sudo zypper ar http://download.opensuse.org/repositories/devel:/languages:/nodejs/openSUSE_13.1/ Node.js
sudo zypper in nodejs nodejs-devel
```

**Fedora**

```
sudo yum install nodejs npm
```

**Arch Linux**

```
pacman -S nodejs
```

## OSX

**Usando Fink**

```
 fink install nodejs
```

**Usando homebrew**

```
 brew install node
```

**Usando macports**

```
 port install nodejs
```

## Windows

Basta fazer o download [aqui]

Indepentende do sistema operacional que você estiver trabalhando, para ver se tudo ocorreu bem, basta digitar o seguinte comando em seu terminal:

```
node -v
```

#Package.json


Este é um dos arquivos mais importantes para um projeto [nodejs], um **package.json** mal estruturado pode comprometer o funcionamento do sistema. Ele é responsavel por todas as dependêndias que são compreendidas pelo **NPM** e outras coisas. Veja um exemplo:

```
{
  "name": "Nome do modulo",
  "description": "Descrição do modulo",
  "version": "1.0.0",
  "author": "Renan Martins Pimentel <renan.pimentel@gmail.com>",
  "contributors": [
    "Nome Sobrenome <email@email.com>"
  ],
  "keywords": [
    "keywords-1",
    "keywords-2"
  ],
  "repository": "link-do-repositorio",
  "license": "MIT",
  "dependencies": {
    "modulo-01": "1.0.0",
    "modulo-02": "2.0.0"
  },
  "devDependencies": {
    "dev-modulo-01": "1.0.0",
    "dev-modulo-02": "2.0.0"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "scripts": {
    "start": "node app",
  }
}
```

# Olá mundo!

Assim como tudo que fazemos de novo no mundo de programação, vamos ao nosso **Ola Mundo!**. Diferente de algumas linguagens que estamos acustumados a trabalhar, o [nodejs] é responsavel pelo seu proprio servidor. Pode parecer dificil, mas veja como é fácil:

Crie um arquivo *app.js*

```
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Ola mundo!</h1>");
  response.end();
});
server.listen(3000);
```

Simplesmente, usamos um dos modulos nativo do [nodejs], o [http] e apontamos o nosso servidor para a porta *3000*, para validarmos isso, basta digitar no terminal:

```
npm start
```

ou

```
node app.js
```

Feito isso, acesse via navegador a URL http://localhost:3000

#Próximos passos

Com isso, você já pode perder um pouco o medo de trabalhar com **javascript/nodejs**, pretendo escrever mais coisas, mas se preferir, faça o curso ou leia o livro que comentei no começo do post.

A ideia para os proximos post são:

 * Como o nodemon pode ajudar no desenvolvimento
 * Nodejs + mysql 
 * Como fazer testes em Nodejs com mocha
 * Coverage com istanbul


[nodejs]: http://www.nodejs.org
[express]: https://github.com/visionmedia/express
[Caio Ribeiro]: https://twitter.com/crp_underground
[Suissa]: https://twitter.com/osuissa
[Aplicações web real-time com Node.js]: http://www.casadocodigo.com.br/products/livro-nodejs
[Curso BeMEAN]: http://bemean.com.br/
[aqui]: http://nodejs.org/download/
[http]: http://nodejs.org/api/http.html
