# Documento de Visão: Site de Minijogos

## 1. Objetivo
O objetivo do site de minijogos é criar uma plataforma online que disponibilize uma ampla variedade de minijogos rápidos e divertidos, proporcionando entretenimento casual para jogadores de todas as idades. O sistema será acessível, fácil de usar e permitirá que os usuários joguem diretamente nos seus navegadores, sem a necessidade de downloads complexos ou tutoriais longos.

## 2. Escopo
O site de minijogos poderá ser utilizado em diversos contextos e ambientes, como:
- **Residências**: Para diversão individual ou LAN.
- **Escolas**: Como recurso para entretenimento em momentos de lazer dos estudantes.
- **Cafés e Cybercafés**: Oferecendo entretenimento casual para os clientes.
- **Ambientes Corporativos**: Durante pausas, promovendo momentos de relaxamento para os funcionários.

## 3. Partes Interessadas (Stakeholders)
- **Usuários Finais**: Crianças, adolescentes e jovens adultos que procuram entretenimento rápido e acessível.
- **Proprietário do Sistema**: Administrador da plataforma, responsável pela manutenção e gerenciamento do conteúdo do site.
- **Equipa de Desenvolvimento**: Responsáveis pela implementação e manutenção do sistema.
- **Anunciantes**: Empresas interessadas em promover os produtos e serviços na plataforma.
- **Pais e Educadores**: Que podem utilizar o site para momentos de lazer.

## 4. Equipe do Projeto
### 4.1 Time de Desenvolvimento
- **Desenvolvedor Frontend**: Responsável pela interface do usuário(HTML e CSS).
- **Desenvolvedor Backend**: Responsável pelo servidor e lógica do sistema (C#).
- **Engenheiro de Software Low Code**: Responsável por construir e integrar partes da plataforma utilizando **Outsystems**.
- **Designer Gráfico**: Criação de gráficos, layout e identidade visual do site.
- **Gerente de Projeto**: Coordenação da equipe e planejamento do cronograma de desenvolvimento.
- **Testadores**: Garantir a qualidade e funcionalidade do site antes do lançamento.

## 5. Características do Sistema
### 5.1 Funcionalidades Principais
1. **Biblioteca de Jogos**
   - Catálogo de minijogos organizados por categorias (arcade, quebra-cabeça, ação, etc.).
   - Pesquisa e filtro de jogos por tipo.

2. **Tabela de Pontuações**
   - Sistema de tabela de pontos para jogos que necessitem, exibindo as melhores pontuações dos jogadores.
   - Rankings específicos para cada jogo, incentivando a competitividade.

3. **Perfis do Utilizador**
   - Cadastro com nome e password para personalização e armazenamento de dados do usuário.

4. **Design Responsivo**
   - Interface adaptável a qualquer computador, garantindo uma experiência de jogo consistente.
     
5. **Personalização de Avatares**
   - Opção para que os usuários personalizem seus perfis com avatares, skins ou outras formas de customização visual, utilizando pontos adquiridas nos jogos

### 5.2 Funcionalidades Adicionais (Não Necessario)
1. **Interatividade Social**
   - Comparatilhar Ranking global, Comentários entre utilizadores online, partilhar screenshots.
2. **Personalização de Avatares**
   - Opção para que os usuários personalizem seus perfis com avatares, skins ou outras formas de customização visual, utilizando pontos adquiridas nos jogos
3. **Histórico de Jogos**
   - Armazenamento do histórico de partidas para cada usuário, permitindo que eles revisem seu desempenho anterior, melhorem estratégias e comparem suas estatísticas ao longo do tempo.
4.**Suporte a Controladores Externos**
   - Compatibilidade com gamepads e outros controladores externos.
  
## 6. Arquitetura de Referência
A arquitetura do sistema será composta pelos seguintes componentes principais:
- **Frontend**: Implementado com **HTML**, responsável pela interface com o usuário.
- **Backend**: Desenvolvido em **C#**, responsável pela lógica do servidor e gerenciamento de dados.
- **Base de Dados**: Sistema de armazenamento em **SQL** usando XAMPP, que vai guardar informações dos usuários, pontuações e detalhes dos jogos.
- **Low Code Integration**: Uso de **Outsystems** para construção e manutenção rápida de partes do sistema.

## 7. Restrições do Produto
### 7.1 Restrições Identificadas
- **Desempenho**: A plataforma pode não funcionar bem em computadores de baixo desempenho, comprometendo a experiência de alguns usuários.
- **Conectividade**: Dependência de conexão à internet, limitando o uso em áreas sem acesso adequado à internet.
- **Compatibilidade**: Alguns navegadores mais antigos podem não suportar todos os recursos de forma otimizada.

## 8. Integração LLM (Large Language Model)
### 8.1 Utilização do LLM
- **Assistência ao Utilizador**: Utilizar um LLM (como o GPT-4) para fornecer suporte em tempo real aos usuários, respondendo a perguntas sobre como jogar, resolver problemas comuns e até sugerir jogos com base nas preferências do utilizador.
- **Moderação e Monitoramento**: O LLM pode ser usado para monitorar comentários e interações, filtrando o conteúdo inapropriado e mantendo um ambiente seguro para os jogadores.
- **Personalização de Experiência**: Analisar o comportamento dos usuários e sugerir jogos personalizados, aumentando o engajamento e a satisfação.
