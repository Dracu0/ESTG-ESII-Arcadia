import fs from 'fs'; // Importa o módulo 'fs' para ler ficheiros do sistema de ficheiros
import path from 'path'; // Importa o módulo 'path' para manipulação de caminhos de ficheiros
import { JSDOM } from 'jsdom'; // Importa a classe JSDOM para simular o navegador no ambiente de teste

describe('HomePage.html', () => {
    let dom; // Variável para armazenar a instância do DOM
    let document; // Variável para armazenar o objeto 'document' do DOM

    // Antes de todos os testes, inicializa o DOM com o conteúdo do ficheiro HTML
    beforeAll(async () => {
        // Caminho do ficheiro HTML a ser testado
        const filePath = path.resolve(__dirname, '../website/pages/HomePage.html');
        
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

    // Teste 1: Verifica se a barra de pesquisa existe e tem o placeholder correto
    test('deve ter uma barra de pesquisa', () => {
        const searchBar = document.querySelector('.search-bar'); // Seleciona a barra de pesquisa
        expect(searchBar).not.toBeNull(); // Verifica se a barra de pesquisa não é nula
        expect(searchBar.placeholder).toBe('Search...'); // Verifica se o placeholder da barra de pesquisa está correto
    });

    // Teste 2: Verifica se as setas de navegação para a esquerda e para a direita existem
    test('deve ter as setas de navegação', () => {
        const leftArrow = document.getElementById('left-arrow'); // Seleciona a seta de navegação para a esquerda
        const rightArrow = document.getElementById('right-arrow'); // Seleciona a seta de navegação para a direita
        expect(leftArrow).not.toBeNull(); // Verifica se a seta para a esquerda não é nula
        expect(rightArrow).not.toBeNull(); // Verifica se a seta para a direita não é nula
    });

    // Teste 3: Verifica se a imagem de fundo existe e se o caminho está correto
    test('deve ter uma imagem de fundo', () => {
        const backgroundImage = document.querySelector('.background-image'); // Seleciona a imagem de fundo
        expect(backgroundImage).not.toBeNull(); // Verifica se a imagem de fundo não é nula
        expect(backgroundImage.src).toContain('BG.png'); // Verifica se o caminho da imagem contém 'BG.png'
    });
    
    // Teste 4: Verifica se o menu de categorias existe e contém elementos
    test('deve ter um menu de categorias', () => {
        const menuTab = document.querySelector('.menu-tab'); // Seleciona o menu de categorias
        expect(menuTab).not.toBeNull(); // Verifica se o menu de categorias não é nulo
        const categories = menuTab.querySelectorAll('li'); // Seleciona todas as categorias (itens de lista)
        expect(categories.length).toBeGreaterThan(0); // Verifica se há pelo menos uma categoria
    });
    
    // Teste 5: Verifica se o ícone de menu e o botão de voltar existem
    test('deve ter o ícone de menu e o botão de voltar', () => {
        const menuIcon = document.querySelector('.icon-menu'); // Seleciona o ícone de menu
        const backButton = document.querySelector('.back-icon'); // Seleciona o botão de voltar
        expect(menuIcon).not.toBeNull(); // Verifica se o ícone de menu não é nulo
        expect(backButton).not.toBeNull(); // Verifica se o botão de voltar não é nulo
    });
});
