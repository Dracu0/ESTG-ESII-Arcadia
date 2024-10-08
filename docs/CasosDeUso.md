# Modelo de Casos de Uso

## Para o Utilizador

### Caso de Uso: Criação de Conta
- *Ator Principal*: Utilizador
- *Objetivo*: O utilizador deseja criar uma conta para poder aceder ao site e guardar as suas pontuações.
- *Fluxo Principal*:
  1. O utilizador seleciona a opção "Criar Conta".
  2. O sistema solicita um nome e uma palavra-passe.
  3. O utilizador insere as informações solicitadas.
  4. O sistema valida os dados e regista a nova conta.
  5. O utilizador recebe uma confirmação de que a conta foi criada com sucesso.
- *Fluxo Alternativo*:
  - Caso as informações inseridas sejam inválidas (ex.: palavra-passe fraca), o sistema exibe uma mensagem de erro e pede correção.

### Caso de Uso: Pesquisa de Jogos por Categoria
- *Ator Principal*: Utilizador
- *Objetivo*: O utilizador quer encontrar jogos de uma categoria específica.
- *Fluxo Principal*:
  1. O utilizador acede à página de categorias.
  2. O sistema apresenta várias categorias (ex.: ação, aventura, puzzle).
  3. O utilizador seleciona uma categoria.
  4. O sistema exibe os jogos da categoria escolhida.
  5. O utilizador escolhe um jogo para jogar.

### Caso de Uso: Jogar Jogos Diretamente no Site
- *Ator Principal*: Utilizador
- *Objetivo*: Jogar diretamente no navegador.
- *Fluxo Principal*:
  1. O utilizador seleciona um jogo.
  2. O sistema carrega o jogo no navegador.
  3. O utilizador joga o jogo.
  4. O utilizador pode selecionar a opção "Ecrã Inteiro" para melhorar a experiência.
  5. O progresso do utilizador é automaticamente guardado na sua conta.

### Caso de Uso: Barra de Pesquisa de Jogos
- *Ator Principal*: Utilizador
- *Objetivo*: Localizar jogos pelo nome.
- *Fluxo Principal*:
  1. O utilizador introduz o nome de um jogo na barra de pesquisa.
  2. O sistema apresenta uma lista de jogos relacionados com a pesquisa.
  3. O utilizador escolhe um jogo da lista.

## Para o Administrador

### Caso de Uso: Gestão de Jogos
- *Ator Principal*: Administrador
- *Objetivo*: Gerir os jogos no site.
- *Fluxo Principal*:
  1. O administrador faz login no painel de administração.
  2. O administrador seleciona a opção para adicionar, editar ou remover jogos.
  3. O sistema apresenta as opções de gestão.
  4. O administrador faz as alterações necessárias (ex.: adicionar um novo jogo, editar informações de um jogo existente, remover um jogo).
  5. O sistema atualiza a base de dados e reflete as alterações no site.

### Caso de Uso: Estatísticas de Utilização
- *Ator Principal*: Administrador
- *Objetivo*: Visualizar as estatísticas de utilização dos jogos.
- *Fluxo Principal*:
  1. O administrador acede ao painel de estatísticas.
  2. O sistema apresenta as estatísticas de uso (número de jogadores, tempo médio de jogo, etc.) de cada jogo.
  3. O administrador usa esta informação para decisões sobre os jogos no site (manter, atualizar, remover).
