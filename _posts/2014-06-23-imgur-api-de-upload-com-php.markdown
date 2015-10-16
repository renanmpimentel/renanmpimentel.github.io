---
layout: post
title:  "imgur: api de upload com php"
date:   2014-06-23 20:50:00
categories: php
name: /imgur-api-de-upload-com-php.html
tag: php, api, imgur
description: Um pequeno exemplo de como fazer upload de imagens para o imgur. Vou mostrar de forma simples, caso pretenda implementar isso em algum projeto seu, faça algumas melhorias e poste aqui nos comentários.
feature: /assets/img/imgur-api/api-imgur.jpg
---

Um pequeno exemplo de como fazer upload de imagens para o [imgur]. Vou mostrar de forma simples, caso pretenda implementar isso em algum projeto seu, **faça algumas melhorias** e poste aqui nos comentários.

O primeiro passo é fazer o cadastro no [imgur], e depois de criada e confirmada a conta, é necessário criar uma [chave de autorização]

![alt text](/assets/img/imgur-api/upload-image-imgur-001.jpg "")

Feito tudo isso, vai ser gerada uma chave **client ID** e **client secret**, vamos usar **apenas a primeira** em nossa aplicação.

![alt text](/assets/img/imgur-api/upload-image-imgur-002.jpg "")

### Formulário HTML

Aqui, um formulário simples:

```html
<form action="upload.php" enctype="multipart/form-data" method="POST">
    Escolha a imagem: <input name="img" size="35" type="file"/><br/>
    <input type="submit" name="submit" value="Upload"/>
</form>
```

### Enviando a foto

Vamos criar um arquivo upload.php e informar o **client ID**

```php
$client_id ="f022afbee1d5b81";
```

Depois, ler o conteudo da imagem

```php
$filename = $_FILES['img']['tmp_name'];
$handle   = fopen($filename, "r");
$data     = fread($handle, filesize($filename));
$pvars    = array('image' => base64_encode($data));
```

E por último, enviaremos essa informação via **cURL** para a API do [imgur]: *https://api.imgur.com/3/image.json*

```php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://api.imgur.com/3/image.json');
curl_setopt($curl, CURLOPT_TIMEOUT, 30);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Client-ID ' . $client_id));
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $pvars);
$response = curl_exec($curl);
curl_close ($curl);

//TRATAMOS O RETORNO DE FORMA SIMPLES
$imgur = json_decode($response,true);

if(!empty($imgur['data']['link'])) {
        exit('<a href=' . $imgur['data']['link'] . ' target="blank"> Ver imagem </a>');
}

exit($imgur['data']['error']);
```

O código final está nesse [gist]

### Documentação oficial:

* Função [fopen]
* Função [fread]
* Biblioteca [curl]
* Função [json_decode]

Essa foi uma demonstração simples, não use esse código para fins comerciais, pois falta validações e outras melhorias.

![alt text](http://replygif.net/i/1188.gif)

[imgur]: http://imgur.com/
[chave de autorização]:https://api.imgur.com/oauth2/addclient
[fopen]: http://www.php.net/manual/en/function.fopen.php
[fread]: http://www.php.net/manual/en/function.fread.php
[curl]: http://www.php.net/manual/en/book.curl.php
[json_decode]: http://www.php.net/manual/en/function.json-decode.php
[gist]: https://gist.github.com/renanmpimentel/59d567b71239d9fcfb74
