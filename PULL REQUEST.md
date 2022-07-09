# Ferramentas Utilizadas
* Framework ReactJS e suas bibliotecas;
* Axios - utilizado para requisões http;
* Styled Components - utilizado para estilização dos componentes e das páginas;
* Jest - responsável pelos testes unitários implementados.

# Layout

### Páginas

O layout da aplicação seguiu o proposto no teste, com algumas pequenas implementações. A aplicação conta com 5 páginas, sendo elas: Pagina inicial, meus favoritos, mes anúncios, login e cadastro.
As páginas meus favoritos e meus anúncios só podem ser acessadas por usuários logados, portanto um usuário não identificado que tentar acessar as mesmas será redirecionado a tela de login.

### Modais

A aplicação conta com dois modais, o de criar e editar anúncios e o de filtrar os anúncios já criados. Ambos são responsivos e podem ser facilmente utilizados tanto na versão desktop quanto na mobile.

### Cards

Os cards são os principais componentes da aplicação, é através deles que o usuário pode favoritar, editar ou mesmo excluir algum anúncio.
O usuário logado pode editar ou excluir apenas anúncios próprios, podendo apenas favoritar os demais anúncios.

### Header

A header permite a navegação entre as páginas e também sofre alterações mediante a autenticação do usuário.

# Testes
Os teste unitários foram aplicados inicialmente apenas na questão de alteração do layout mediante a autenticação do usuário, então tanto a parte dos Cards como do Header foi testada nesse sentido.

# Video completo da aplicação

https://www.youtube.com/watch?v=eRIYYnuM5Xs&ab_channel=LuisFelipeSanches