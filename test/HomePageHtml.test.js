import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';



describe('HomePage.html', () => {
    let dom;
    let document;

    beforeAll(async () => {
        const filePath = path.resolve(__dirname, '../website/pages/HomePage.html');
        const htmlContent = fs.readFileSync(filePath, 'utf8');

        // Usar 'runScripts: "dangerously"' para garantir que scripts do HTML sejam executados
        dom = new JSDOM(htmlContent, { 
            resources: "usable", 
            runScripts: "dangerously",
        });

        // Espera o carregamento completo do DOM
        await new Promise((resolve) => {
            dom.window.addEventListener("load", resolve); // Aguarda o evento de carregamento
        });

        document = dom.window.document;
    });

    test('deve ter uma barra de pesquisa', () => {
        const searchBar = document.querySelector('.search-bar');
        expect(searchBar).not.toBeNull();
        expect(searchBar.placeholder).toBe('Search...');
    });

    test('deve ter as setas de navegação', () => {
        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        expect(leftArrow).not.toBeNull();
        expect(rightArrow).not.toBeNull();
    });
});
