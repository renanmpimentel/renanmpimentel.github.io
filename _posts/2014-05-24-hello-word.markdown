---
layout: post
title:  "Hello word!"
date:   2014-05-24 09:50:00
categories: jekyll
---

Bom, como tudo que começamos de novo ou do zero, sempre temos o primeiro *hello word!*, e por aqui não poderia ser diferente. Resolvi me aventurar de novo, a ter um blog, não queria ter algo como o **wordpress** (as vezes uma bazuca para matar um mosquito). Foi ai que resolvi usar o **Jekyll**, feito em **ruby**, e tem algumas vantagens legais,veja o que pessoal do [tableless] diz.

A ideia veio de um colega de trabalho, o [Rogerio] '_ruby on rails man_', que tem um post explicando como compilar a ultima versão do **Ruby** em máquinas _*NIX_. Resolvi pegar um pouco do que ele disse lá, e ascrentar algumas dicas, para ensinar como colocar o **Jekyll** em sua máquina, e publicar o seu blog/site, utilizando o [Github Pages].

#### Atenção

Em alguns sistemas operacionais **Linux**, os repositórios sempre são de versões antigas, o **Ubuntu** é um grande exemplo disso. As vezes achamos repositórios não oficiais, mas a melhor forma mesmo, é compilar _"na mão"_ a versão desejada.

#### Escolhendo a versão 

O primeiro passo é escolher a versão e [fazer o download], no nosso caso, vamos utilizar a [2.1.2]. Feito o download, precisamos verificar se algumas dependencias estão instaladas corretamente, para usuários **Debian/Ubuntu**, segue o comando:


```
$ sudo apt-get update && sudo apt-get upgrade -y
```

```
$ sudo apt-get install build-essential git git-core curl bison openssl libreadline6 libreadline6-dev zlib1g zlib1g-dev libssl-dev libyaml-dev libxml2-dev libxslt-dev autoconf
```

#### Compilando o Ruby
Agora, você deve descompactar a pasta `tar -vzxf [versao-ruby].tar.gz`, feito isso entre na pasta gerada e execute o seguinte comando no console do seu sistema operacional.

```

$ sudo ./configure --prefix=PATH/RUBY_VERSION --bindir=BIN_PATH
```

O comando exemplo precisa ser ajustado. Para isto, substitua as variáveis do comando acima:

 * **PATH**: Defina uma pasta para receber versões do Ruby. As minhas versões foram todas para uma pasta   chamada ``/usr/local/ruby``.
 * **RUBY_VERSION**: Deve ser substituída pela versão que está compilando, como por exemplo ``2.1.2``.
 * **BIN_PATH**: Normalmente, a pasta que são encontrados os executáveis do sistema estão na ``/usr/bin``.

E se tudo ocorrer bem, falta apenas executar esse dois comandos: 

```
$ make && make install
```

Eles são responsáveis por concluir a instalação do código-fonte em seu sistema.

#### Finalizando 

Se você conseguiu executar todos os passos e não enfrentou nenhum problema, agora basta executar o seguinte comando no console: ``ruby -v``, a mensagem esperada é algo parecido com isso:

```
ruby 2.1.2p95 (2014-05-08 revision 45877) [i686-linux]
```

Se por algum motivo você nao conseguir acessar o executável do Ruby, crie um alias de execução com o seguinte comando no console:

```
$ ln -s PATH/RUBY_VERSION/bin/ruby BIN_PATH/ruby
```

Será necessário substituir as variáveis do comando por aquelas que foram definidas no momento da execução do comando ``configure``.

Se você chegou até aqui sem problemas ou erros, continue o passo a seguir, caso ao contrário revise os passos anteriores, ou deixe uma mensagem aqui nos comentários.

#### Instalando o Jekyll

Agora que temos o **Ruby** configurado, vamos começar a brincar de verdade com o **Jekyll**, o [site oficial] você pode encontrar a [documentação], mas basicamente são quatro passos:

  * Primeiro passo

	Instalar a gem: ``$ sudo gem install jekyll``

  * Segundo passo
	Criar o site/blog com o jekyll: ``$ jekyll new meu-site``
	Resposta: ``New jekyll site installed in /home/USER/path/meu-site.`` 

  * Terceiro passo

	Entre no diretório criado: ``$ cd meu-site``

  * Quarto passo

	Dentro do diretório criado, digite: ``$ jekyll server``

Pronto, a estrutura do seu site/blog está criado, para acessar localmente basta acessar: ``http:://localhost:4000``

#### Erros

Como eu uso o **Ubuntu (12.04 LTS)**, ao tentar executar o comando ``jekyll server`` ele apareceu o seguinte erro:

```
$ jekyll server

/usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/execjs-2.0.2/lib/execjs/runtimes.rb:51:in `autodetect': Could not find a JavaScript runtime. See https://github.com/sstephenson/execjs for a list of available runtimes. (ExecJS::RuntimeUnavailable)
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/execjs-2.0.2/lib/execjs.rb:5:in `<module:ExecJS>'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/execjs-2.0.2/lib/execjs.rb:4:in `<top (required)>'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/coffee-script-2.2.0/lib/coffee_script.rb:1:in `<top (required)>'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/coffee-script-2.2.0/lib/coffee-script.rb:1:in `<top (required)>'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/jekyll-coffeescript-1.0.0/lib/jekyll-coffeescript.rb:2:in `<top (required)>'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:55:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/jekyll-2.0.3/lib/jekyll.rb:73:in `<top (required)>'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:73:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/2.1.0/rubygems/core_ext/kernel_require.rb:73:in `require'
	from /usr/local/ruby/2.1.2/lib/ruby/gems/2.1.0/gems/jekyll-2.0.3/bin/jekyll:6:in `<top (required)>'
	from /usr/bin/jekyll:23:in `load'
	from /usr/bin/jekyll:23:in `<main>'
```

Pare resolver esse problema, basta instalar o **nodejs** em sua máquima, basta digitar o seguinte comando:

```
$ sudo apt-get install nodejs
```

Agora sim, se executarmos o comando: ``$ jekyll server``, deve aparecer isso:

```
Configuration file: /home/USER/path/meu-site/_config.yml
            Source: /home/USER/path/meu-site
       Destination: /home/USER/path/meu-site/_site
      Generating... 
                    done.
Configuration file: /home/USER/path/meu-site/_config.yml
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.

```

Pronto, agora é só seguir o quarto passo, para acessar localmente o seu site/blog.

No próximo _post_ vou mostrar como integrar seu site/blog com o [Github Pages].


[Rogerio]: http://rogerio.me
[Github Pages]: https://pages.github.com/
[fazer o download]: ftp://ftp.ruby-lang.org/pub/ruby
[2.1.2]: ftp://ftp.ruby-lang.org/pub/ruby/ruby-2.1.2.tar.gz
[tableless]: http://tableless.com.br/jekyll-servindo-sites-estaticos/
[site oficial]: http://jekyllrb.com/
[documentação]:http://jekyllrb.com/docs/home/