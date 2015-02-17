---
layout: post
title:  "web scraping com nodejs"
date:   2014-10-24 09:50:00
categories: javascript
name: /meu-ambiente-de-desenvolvimento.html
tags: workflow, dev, web
description: Eu sei que o assunto é clichê, mas foi lendo sobre o ambiente de desenvolvimento de outros desenvolvedores que aprendi sobre algumas tecnlogias e/ou ferramentas. Espero que esse post ajude alguém :P
feature: /assets/images/post-006/web-scraping.jpg
---

Um dia desses, surgiu a necessidade de fazer um _web scraping_, que consiste básicamente em extrair informações de um determinado site.

Geralmente eu desenvolveria algo em __PHP__, a linguagem que mais trabalho no dia a dia atualmente. Mas como estou me dedicando a novas tecnologias, resolvi desenvolver isso em javascript, então, lembrei do __nodejs__. 

Só para titulo de curiosidade, caso eu fizesse isso em PHP, usaria uma biblioteca muito boa, a [phpQuery], se tiver dúvidas, basta seguir esse [tutorial].

Mas, como estamos falando de javascript (nodejs), vamos usar os seguintes componentes:

  * request 
  * cheerio - O __jQuery__ do nodejs, o que pode encorajar muitos desenvolvedores a se aventurar no mundo de nodejs.
  
No exemplo que vamos fazer a seguir, vai buscar o titulo e a url do post do meu blog, mas pode ser usado em qualquer site. O código dessa aplicação é extremamente simples, ficaria assim:

```
const URL = 'http://renanmpimentel.github.io';

var request = require('request');
var cheerio = require('cheerio');

request(URL, function (err, resp, body) {
  if (!err) {
      var $ = cheerio.load(body);
      var info = [];

      $('article h2 a').map(function (i, links) {
          var text = $(links).text(),
              link = $(links).attr('href');

          info.push({
              link: URL + link,
              desc: text
          });
      });

      console.log(info);
  }
});
```

A resposta esperada no terminal deve ser a seguinte:

![alt text](/assets/images/post-006/app.png "")

Você pode fazer o download do [exemplo aqui], e caso tenha alguma dúvida deixe um comentário.

    
[phpQuery]: https://code.google.com/p/phpquery/
[tutorial]: http://www.deivison.com.br/phpquery-web-scraping-ja-imaginou-selecionar-elementos-de-um-outro-site-com-php-utilizando-a-semantica-de-elementos-como-do-css/
[exemplo aqui]: https://github.com/renanmpimentel/webscraping-blog
