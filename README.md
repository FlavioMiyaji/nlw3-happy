# nlw3-happy
Next Level Week #3 back-end services app in NodeJS.

# Trilha OmniStack
## 1º [Dia: Conceitos e estrutura web (Acelerando sua evolução)](https://github.com/FlavioMiyaji/nlw3-happy-web)
## 2º Dia: Back-end com Node.js (Olhando as oportunidades)
* [x] Criando projeto com Node.js
* [x] Rotas, parâmetros e métodos HTTP (express)
* [x] Configurando banco de dados (sqlite/typeorm)
* [x] Criando tabelas no banco (migration)
* [x] Criando organato sem imagem
* [x] Abstraindo em controller (MVC)
* [x] Listando orfanatos
* [x] Upload de imagens (multer)
* [x] Trabalhando com views
* [x] Detalhe de orfanato
* [x] Lidando com exceções (ErrorRequestHandler)
* [x] Validação de dados (yup)
## 3º [Dia: Finalizando front-end (A escolha da stack)](https://github.com/FlavioMiyaji/nlw3-happy-web)
## 4º [Dia: Estruturando app modile (Até 2 anos em 2 meses)](https://github.com/FlavioMiyaji/nlw3-happy-mobile)
## 5º [Dia: Finalizando app mobile (A minha extra)](https://github.com/FlavioMiyaji/nlw3-happy-mobile)

# Desafios
* [ ] Implementar o entrar em contato (WhatsApp)
* [ ] I18n
* [x] Layout da aplicação [web](https://www.figma.com/file/sUGL5uzKzs8judEMeZj6Kj/Happy-Web-2.0-Copy) [mobile](https://www.figma.com/file/nD2FlWH6aVeOg7Xo9YiACn/Happy-Mobile-2.0-Copy)
* [ ] Acesso restrito
* [ ] Recuperação de senhas
* [ ] Cadastro de orfanatos
* [ ] Onboarding do usuário
* [ ] Localização real do usuário
* [ ] Cadastro em múltiplas etapas
* [ ] Logout da aplicação
* [ ] Deploy da aplicação

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:33333](http://localhost:3333) to view it in the browser.<br />
Available routes:<br />
* GET: /orphanages<br />
* GET: /orphanages/:id<br />
* POST: /orphanages<br />

### `yarn typeorm migration:run`

Runs the migrations to create all tables.

### `yarn typeorm migration:revert`

Runs the migrations to drop the tables one by one.
