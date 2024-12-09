import fs from 'fs'; // Importa o módulo 'fs' para ler ficheiros do sistema de ficheiros
import path from 'path'; // Importa o módulo 'path' para manipulação de caminhos de ficheiros
import { JSDOM } from 'jsdom'; // Importa a classe JSDOM para simular o navegador no ambiente de teste

describe('LoginPage.html', () => {
    let dom; // Variável para armazenar a instância do DOM
    let document; // Variável para armazenar o objeto 'document' do DOM

    // Antes de todos os testes, inicializa o DOM com o conteúdo do ficheiro HTML
    beforeAll(async () => {
        // Caminho do ficheiro HTML a ser testado
        const filePath = path.resolve(__dirname, '../website/pages/LoginPage.html');
        
        // Lê o conteúdo do ficheiro HTML
        const htmlContent = fs.readFileSync(filePath, 'utf8');

        // Cria uma instância do JSDOM e executa os scripts do HTML
        dom = new JSDOM(htmlContent, { 
            resources: "usable", 
            runScripts: "dangerously", // Executa os scripts do HTML para garantir que a página seja carregada corretamente
        });

        // Aguarda o carregamento completo do DOM
        await new Promise((resolve) => {
            dom.window.addEventListener("load", resolve); // Espera até que o evento de carregamento seja disparado
        });

        // Atribui o documento à variável
        document = dom.window.document;
    });

    // Teste 1: Verifica se o campo de nome de usuário existe e tem o placeholder correto
    test('deve ter um campo de nome de usuário', () => {
        const usernameField = document.querySelector('input[name="Username"]'); // Seleciona o campo de nome de usuário
        expect(usernameField).not.toBeNull(); // Verifica se o campo de nome de usuário não é nulo
        expect(usernameField.placeholder).toBe('Username'); // Verifica se o placeholder do campo de nome de usuário está correto
    });

    // Teste 2: Verifica se o campo de senha existe, tem o placeholder correto e o tipo de campo está como 'password'
    test('deve ter um campo de senha', () => {
        const passwordField = document.querySelector('input[name="Password"]'); // Seleciona o campo de senha
        expect(passwordField).not.toBeNull(); // Verifica se o campo de senha não é nulo
        expect(passwordField.placeholder).toBe('Password'); // Verifica se o placeholder do campo de senha está correto
        expect(passwordField.type).toBe('password'); // Verifica se o tipo do campo de senha é 'password'
    });

    // Teste 3: Verifica se o botão "Start Game" existe e tem o texto correto
    test('deve ter um botão "Start Game"', () => {
        const startButton = document.querySelector('button'); // Seleciona o botão
        expect(startButton).not.toBeNull(); // Verifica se o botão não é nulo
        expect(startButton.textContent).toBe('Start Game'); // Verifica se o texto do botão é "Start Game"
    });

    // Teste 4: Verifica se as setas de navegação existem (seta inicial e seta do personagem)
    test('deve ter as setas de navegação', () => {
        const startArrow = document.querySelector('.startArrow'); // Seleciona a seta de navegação inicial
        const characterArrow = document.querySelector('.characterArrow'); // Seleciona a seta de navegação do personagem
        expect(startArrow).not.toBeNull(); // Verifica se a seta inicial não é nula
        expect(characterArrow).not.toBeNull(); // Verifica se a seta do personagem não é nula
    });

    // Teste 5: Verifica se existe um link para "Create Character" e se o caminho e o texto estão corretos
    test('deve ter um link para "Create Character"', () => {
        const createAccountLink = document.querySelector('.linkArea a'); // Seleciona o link para criar personagem
        expect(createAccountLink).not.toBeNull(); // Verifica se o link não é nulo
        expect(createAccountLink.href).toContain('CreateAccount.html'); // Verifica se o link leva à página correta
        expect(createAccountLink.textContent).toBe('Create Character'); // Verifica se o texto do link está correto
    });

    // Teste 6: Verifica se a imagem de fundo existe e se o caminho da imagem está correto
    test('deve ter a imagem de fundo corretamente', () => {
        const backgroundImage = document.querySelector('.background-image'); // Seleciona a imagem de fundo
        expect(backgroundImage).not.toBeNull(); // Verifica se a imagem de fundo não é nula
        expect(backgroundImage.src).toContain('BG.png'); // Verifica se o caminho da imagem contém 'BG.png'
    });

    // Teste 7: Verifica se o gif de estrelas existe e se o caminho da imagem está correto
    test('deve ter o gif de estrelas', () => {
        const starsGif = document.querySelector('.stars-gif'); // Seleciona o gif de estrelas
        expect(starsGif).not.toBeNull(); // Verifica se o gif de estrelas não é nulo
        expect(starsGif.src).toContain('stars.gif'); // Verifica se o caminho do gif contém 'stars.gif'
    });

    // Teste 8: Verifica se o gif de ARCADIA existe e se o caminho da imagem está correto
    test('deve ter o gif de ARCADIA', () => {
        const arcadiaGif = document.querySelector('.arcadia-gif'); // Seleciona o gif de ARCADIA
        expect(arcadiaGif).not.toBeNull(); // Verifica se o gif de ARCADIA não é nulo
        expect(arcadiaGif.src).toContain('ARCADIA 1.gif'); // Verifica se o caminho do gif contém 'ARCADIA 1.gif'
    });
});
