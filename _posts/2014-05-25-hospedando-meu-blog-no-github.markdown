---
layout: post
title:  "Hospedando meu blog no github"
date:   2014-05-25 17:50:00
categories: github
name: /hospedando-meu-blog-no-github.html
tag: github, github-pages, blog
description: No post anterior hello word! eu falei de como instalar/compilar o Ruby e o Jekyll em sua máquina de desenvolvimento. E agora, vou mostrar como fazer para colocar essa página no ar, se gastar nada, porque vamos usar o Github Pages.
feature: /assets/images/post-002/github-pages.jpg
---


No post anterior [hello word!] eu falei de como instalar/compilar o **Ruby** e o **Jekyll** em sua máquina de desenvolvimento. E agora, vou mostrar como fazer para colocar essa página no ar, se gastar nada, porque vamos usar o [Github Pages].

#### Começando

Bom, primeiro você deve estar logado em sua conta [Github], e criar um novo repositório, caso você não tenha uma conta no [Github], ou não sabe nada sobre o [git], sugiro uma boa [pesquisa aqui]. Mas supondo que você já tenha um pequeno conhecimento em git, vamos seguir.

Crie um repositório, com o nome do seu usuário, exemplo: ``username.github.io``, como na figura abaixo:

![alt text](/assets/images/github-pages-01.jpg "Criando novo repositório")


#### Dando vida a página

Agora, é simples, o primeiro passo é fazer um **clone** do repositório criado:

```$ git clone https://github.com/username/username.github.io ```

Depois, basta seguir os seguintes passos:

```$ cd username.github.io``` 

```$ echo "Hello World" > index.html``` 

E para finalizar, você deve fazer um commit dessas suas alterações:

```bash
$ git add --all

$ git commit -m "Criando uma pagina com github pages"

$ git push
```

Agora é só aguardar alguns minutos, pode ir tomar um café, e quando voltar acesse o dominio: ``username.github.io``. A primeira vez demora um pouco, mas as proximas alterações serão de imediato.

#### Github + Jekyll

No exemplo anterior, mostramos apenas uma pagina em html simples, sem nenhuma dificuldade, agora, veja como é simples fazer o mesmo, só que utilizando o exemplo do _meu-site_ do _[hello word!]_.

Então, nos criarmos a estrutura do **Jekyll**:

```$ jekyll new username.github.io ```

Feito isso, agora é preciso enviar as alterações para o **Github**, digite no console o seguinte comando:

```bash
$ cd username.github.io

$ git init

$git remote add origin git@github.com:username/username.github.io.git
```

E logo após, precisamos criar o primeiro _commit_ da nossa estrutura **Jekyll**

```bash
$ git add --all

$ git commit -m "Criando uma pagina com github pages com Jekyll"

$ git push
```

Mas o [Github Pages] não é a unica forma de publicar o seu site, existem outras maneiras, [em um post], o [Rogerio] explica, como publicar no [Heroku], utilizando o **Jekyll**, vale a pena dar uma conferida.

E depois disso, toda alteração que você quiser que seja publicada, basta fazer um novo _commit_ e por ai vai. O **Git** é uma ferramenta essenciail para qualquer desenvolvedor. E o [Github] é uma das melhores formas de aproveitarmos tudo que ele pode oferecer, mas isso cabe a outro _post_.

[hello word!]: http://renanmpimentel.github.io/others/2014/05/24/hello-word.html
[Github Pages]: https://pages.github.com/
[Github]: https://www.github.com/
[git]:http://git-scm.com/
[pesquisa aqui]: https://www.google.com.br/search?client=ubuntu&hs=TzL&channel=fs&q=about+git+and+github&oq=about+git+and+github
[Rogerio]: http://rogerio.me
[em um post]: http://rogerio.me/paginas-estaticas-com-jekyll-no-heroku
[Heroku]: https://www.heroku.com/
