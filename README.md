# Aplicação SmartRU

Este projeto consiste em uma aplicação web chamada SmartRU, que é uma plataforma de gestão de refeições em residências universitárias. A aplicação possui diversos componentes criados com React e Bootstrap React para lidar com diferentes funcionalidades, como login, registro, depósito, pagamento, entre outros. A construção da api está voltada ao uso da ferramenta Django da linguagem python.

## Componentes

Aqui está uma descrição dos principais componentes da aplicação:

### NavBar

O componente NavBar é uma barra de navegação que aparece na parte superior da página. Ele contém o logo da aplicação "SmartRU" e links para login e registro.

### Login

O componente Login é uma página onde os usuários podem inserir suas credenciais para acessar a aplicação. Ele contém campos para email e senha, bem como um botão de login.

### Register

O componente Register é uma página onde os usuários podem se registrar na aplicação. Ele contém campos para nome, email, senha e confirmação de senha, além de um botão de registro.

### Deposit

O componente Deposit é um formulário onde os usuários podem fazer depósitos em seus cartões de refeição. Ele contém campos para o ID do cartão e o valor do depósito, além de um botão de depósito.

### Payment

O componente Payment é um formulário onde os usuários podem fazer pagamentos usando seus cartões de refeição. Ele contém campos para o ID do cartão e o valor do pagamento, além de um botão de pagamento.

### CardLinking

O componente CardLinking é um formulário onde os usuários podem vincular seus cartões de refeição à sua conta. Ele contém campos para o email do usuário e o ID do cartão, além de um botão de vinculação.

## Como usar

Para executar a aplicação SmartRU localmente, siga estas etapas:

1. Clone este repositório para o seu computador.
2. Instale as dependências do projeto usando `npm install`.
3. Execute o projeto com `npm start`.
4. Acesse a aplicação em seu navegador usando o endereço `http://localhost:3000`.

## Django Views

Além dos componentes React, a aplicação SmartRU também possui partes implementadas em Python usando Django. Aqui estão algumas das views Django:

### Login

A view `login` é responsável por autenticar os usuários na aplicação. Ela recebe uma requisição contendo as credenciais do usuário, verifica se elas correspondem a um usuário registrado e retorna uma resposta adequada.

### Register

A view `register` é responsável por criar novos usuários na aplicação. Ela recebe uma requisição contendo os dados do novo usuário, verifica se esses dados são válidos e cria um novo registro de usuário no banco de dados.

### Outras views

Existem outras views na aplicação, como `deposit`, `payment`, `card_linking`, entre outras, que lidam com diferentes funcionalidades, como fazer depósitos, fazer pagamentos e vincular cartões de refeição.


