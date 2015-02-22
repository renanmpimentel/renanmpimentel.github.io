---
layout: post
title:  "Meu ambiente de desenvolvimento"
date:   2014-09-27 00:00:00
categories: others
name: /meu-ambiente-de-desenvolvimento.html
tags: workflow, dev, web
description: Eu sei que o assunto é clichê, mas foi lendo sobre o ambiente de desenvolvimento de outros desenvolvedores que aprendi sobre algumas tecnlogias e/ou ferramentas. Espero que esse post ajude alguém :P
feature: /assets/images/post-005/workflow.jpg
---

Eu sei que o assunto é clichê, mas foi lendo sobre o "ambiente de desenvolvimento" de outros desenvolvedores que aprendi sobre algumas tecnlogias e/ou ferramentas. Espero que esse post ajude alguém :P


### SISTEMA OPERACIONAL

Sou usuário do linux há um bom tempo, e sempre usei Debian/* para desenvolvimento, atualmente tenho utilizado o Ubuntu.

Vamos lá, utilizo [Ubuntu 14.04 - Trusty Tahr.] em um SSD de 120Gb, por ser tratar de um espaço pequeno, eu fiz a seguinte divisão: 

```bash
➜  ~  sudo fdisk -l

Disco /dev/sda: 120.0 GB, 120034123776 bytes
255 cabeças, 63 setores/trilhas, 14593 cilindros, total de 234441648 setores
Unidades = setores de 1 * 512 = 512 bytes
Tamanho do setor (lógico/físico): 512 bytes / 512 bytes
Tamanho da E/S (mínimo/ideal): 512 bytes / 512 bytes
Identificador do disco: 0x000b2094

Dispositivo Boot      Início        Fim      Blocos   Id  Sistema
/dev/sda1            2046     7999487     3998721    5  Estendida
/dev/sda2   *     7999488   117254143    54627328   83  Linux
/dev/sda3       117254144   234440703    58593280   83  Linux
/dev/sda5            2048     7999487     3998720   82  Linux swap / Solaris
```

A instalação do Ubuntu, é mais facil que do windows :).


### CONFIGURAÇÕES BÁSICAS

Depois de instalar o Ubuntu, o próximo passo é atualizar e instalar alguns pacotes básicos como o __Vim__ (_um editor que venho estudando diaramente para se tornar oficial em meu ambiente_), __python-software-properties__ para adicionar _repositórios ppa_, __Curl__ e por ultimo o __Git__:


```bash
# ATUALIZANDO
$ sudo apt-get update
```

```bash
# PACOTES BÁSICOS
$ sudo apt-get install vim curl git python-software-properties
```


### BASH
Gosto muito do _bash_ nativo do Ubuntu, mas ultimamente eu tenho utilizado o [zsh], pelo simples fato do [oh-my-zsh] ter um visual mais agradavel, o _prompt git_ entre outras facilidades.

![alt text](/assets/images/post-005/oh-my-zsh.jpg "")

Para instalar, é fácil, basta seguir os seguintes passos:

```
# Obtendo o zsh
$ sudo apt-get install zsh
```

Agora, você pode fazer o download e instalar o __oh-my-zsh__ de duas maneiras:

Por wget

```bash
$ wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
```

ou

Por cURL

```bash
$ curl -L http://install.ohmyz.sh | sh
```

Feito o download, basta alterar o bash: ``` $ chsh -s `which zsh` ```

Pronto, reinicie seu computador: ``` $ sudo shutdown -r 0 ```


### WEB SERVER

Atualmente utilizo o [Vagrant] e estou tentando migrar para o [Docker] todos meus projetos. Mas as vezes preciso executar alguma coisa na minha máquina direto, então, sempre mantenho um serviço instalado. No meu caso eu deixo PHP, Nginx e NodeJS.

Para instalar o PHP vou adicionar um repositorio ppa [ondrej/php5] e para o NodeJS, irei fazer a instalação pelo [NVM].

##### PHP
```bash
# Adiciono o repositorio
$ sudo add-apt-repository ppa:ondrej/php5
```

```bash
# Atualizo o sistema operacional
$ sudo apt-get update
```

```bash
# Instalação dos pacotes
$ sudo apt-get install nginx php5-fpm php5-cli php5-curl
```

Aproveitando, já instalo o [Composer]:

```bash
$ curl -sS https://getcomposer.org/installer | php
```

Para deixar ele como _global_, vamos mover ele: 

```$ sudo mv composer.phar /usr/bin/composer```

##### NodeJS

O primeiro passo, é instalar o [NVM] (Node Version Manager), e antes que você pergunte, nos vamos usar o NVM, porque as vezes o sistema operacional que usamos tem uma versão muito antiga do NodeJS, e também, porque é possivel ter mais de uma versão instalada. E outras coisas mais.

```bash
# Fazendo o download e instalando o NVM
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.17.1/install.sh | bash 
```

Feito isso, um clone do repositório vai ser criado: ``` ~/.nvm ```, caso isso não ocorra, veja [outras formas de instalar]. Mas se tudo ocorrer bem, o arquivo ```~/.bashrc``` foi alterado, e as seguintes informações foram adicionadas:

```bash
export NVM_DIR="/home/renanmpimentel/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```

Eu costumo replicar essa informações em todos os arquivos de perfil: (```~/.bash_profile```, ```~/.zshrc``` e ```~/.profile```).

Se tudo ocorrer bem, e sem nenhum erro, podemos seguir para os próximos passos:

* Listar todas versões disponiveis:

    ```bash
    $ nvm ls-remote
    ```
    ![alt text](/assets/images/post-005/nvm_ls-remote.jpg "")
    _coloquei um grep para listar as ultimas versões_

* Instalando uma versão
    
    ```bash
    $ nvm install 0.11.14
    ```
    ![alt text](/assets/images/post-005/nvm-install.jpg "")
    _nvm install [versao]_

* Criando um alias default

    ```bash
    $ nvm alias default 0.11.14
    ```
    ![alt text](/assets/images/post-005/nvm-alias-dafault.jpg "")
    _nvm alias [nome-alias] [versao]_


Com isso você ja consegue ter uma ideia de como usar o [NVM], mas se quiser saber mais informações, só ler a [documentação oficial do NVM].

#### Outros

Ainda utilizo outros programas:

* [Mysql Workbench]
* [RoboMongo]
* [ReText]
* [Sublime Text 3](Apesar de estar tentando mudar de vez para o ViM)
* [Spotify]


Por enquanto é isso, caso tenha alguma sugestão para meu ambiente de desenvolvimento, deixe nos comentários.


[Ubuntu 14.04 - Trusty Tahr.]: http://releases.ubuntu.com/14.04/
[zsh]: http://www.zsh.org/
[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh
[temas personalizados]: https://github.com/robbyrussell/oh-my-zsh/wiki/themeshttps://github.com/robbyrussell/oh-my-zsh/wiki/themes
[Vagrant]: https://www.vagrantup.com/
[Docker]: https://www.docker.com/
[ondrej/php5]: https://launchpad.net/~ondrej/+archive/php5
[NVM]: https://github.com/creationix/nvm
[Composer]: https://getcomposer.org/
[outras formas de instalar]: https://github.com/creationix/nvm#install-script
[documentação oficial do NVM]: https://github.com/creationix/nvm#usage
[Mysql Workbench]: http://www.mysql.com/products/workbench/
[RoboMongo]: http://robomongo.org/
[ReText]: http://sourceforge.net/projects/retext/
[Sublime Text 3]: http://www.sublimetext.com/3
[Spotify]: https://www.spotify.com/
