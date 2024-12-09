import fs from 'fs'; // Importa o módulo 'fs' para ler arquivos do sistema de ficheiros
import path from 'path'; // Importa o módulo 'path' para manipulação de caminhos de ficheiros
import { JSDOM } from 'jsdom'; // Importa a classe JSDOM para simular o navegador no ambiente de teste

describe('CreateAccount.html', () => {
    let dom; // Variável para armazenar a instância do DOM
    let document; // Variável para armazenar o objeto 'document' do DOM

    // Antes de todos os testes, inicializa o DOM com o conteúdo do ficheiro HTML
    beforeAll(async () => {
        // Caminho do ficheiro HTML a ser testado
        const filePath = path.resolve(__dirname, '../website/pages/CreateAccount.html');
        
        // Lê o conteúdo do ficheiro HTML
        const htmlContent = fs.readFileSync(filePath, 'utf8');

        // Cria uma instância do JSDOM e executa os scripts do HTML
        dom = new JSDOM(htmlContent, { 
            resources: "usable", 
            runScripts: "dangerously", // Executa scripts do HTML para garantir que a página seja completamente carregada
        });

        // Aguarda o carregamento completo do DOM
        await new Promise((resolve) => {
            dom.window.addEventListener("load", resolve); // Espera até que o evento de carregamento seja disparado
        });

        // Atribui o documento à variável
        document = dom.window.document;
    });

    // Teste 1: Verifica se o campo de nome de utilizador existe
    test('deve ter um campo de nome de utilizador', () => {
        const usernameField = document.querySelector('input[name="Username"]'); // Seleciona o campo de nome de utilizador
        expect(usernameField).not.toBeNull(); // Verifica se o campo não é nulo
        expect(usernameField.placeholder).toBe('Username'); // Verifica o placeholder do campo
        expect(usernameField.required).toBe(true); // Verifica se o campo é obrigatório
    });

    // Teste 2: Verifica se o campo de senha existe
    test('deve ter um campo de senha', () => {
        const passwordField = document.querySelector('input[name="Password"]'); // Seleciona o campo de senha
        expect(passwordField).not.toBeNull(); // Verifica se o campo não é nulo
        expect(passwordField.placeholder).toBe('Password'); // Verifica o placeholder do campo
        expect(passwordField.type).toBe('password'); // Verifica se o tipo do campo é 'password'
        expect(passwordField.required).toBe(true); // Verifica se o campo é obrigatório
    });

    // Teste 3: Verifica se o campo de confirmação de senha existe
    test('deve ter um campo para confirmar a senha', () => {
        const confirmPasswordField = document.querySelector('input[name="Password"][id="confirm_password"]'); // Seleciona o campo de confirmação de senha
        expect(confirmPasswordField).not.toBeNull(); // Verifica se o campo não é nulo
        expect(confirmPasswordField.placeholder).toBe('Confirm Password'); // Verifica o placeholder do campo
        expect(confirmPasswordField.type).toBe('password'); // Verifica se o tipo do campo é 'password'
        expect(confirmPasswordField.required).toBe(true); // Verifica se o campo é obrigatório
    });

    // Teste 4: Verifica se o botão "Create Character" existe
    test('deve ter um botão "Create Character"', () => {
        const createButton = document.querySelector('button'); // Seleciona o botão
        expect(createButton).not.toBeNull(); // Verifica se o botão não é nulo
        expect(createButton.textContent).toBe('Create Character'); // Verifica o texto do botão
    });

    // Teste 5: Verifica se a checkbox "Show Password" existe
    test('deve ter a checkbox "Show Password"', () => {
        const showPassCheckbox = document.querySelector('#ShowPass'); // Seleciona a checkbox
        expect(showPassCheckbox).not.toBeNull(); // Verifica se a checkbox não é nula
    });

    // Teste 6: Verifica se a label da checkbox é "Show Password"
    test('a label da checkbox deve ser "Show Password"', () => {
        const showPassLabel = document.querySelector('label[for="ShowPass"]'); // Seleciona a label associada à checkbox
        expect(showPassLabel).not.toBeNull(); // Verifica se a label não é nula
        expect(showPassLabel.textContent).toBe('Show Password'); // Verifica o texto da label
    });

    // Teste 7: Verifica se as setas de navegação existem
    test('deve ter as setas de navegação', () => {
        const startArrow = document.querySelector('.startArrow'); // Seleciona as setas de navegação
        expect(startArrow).not.toBeNull(); // Verifica se as setas existem
    });
});
