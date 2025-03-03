const form = document.getElementById('form');
const table = document.getElementById('table');
let dados = [];

// Adicionar dados ao clicar no botão "Cadastrar"
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const livro = document.getElementById('livro').value;
    const autor = document.getElementById('autor').value;
    const dado = { livro, autor };
    dados.push(dado);
    document.getElementById('livro').value = '';
    document.getElementById('autor').value = '';
    atualizaTabela();
});

// Função para atualizar a tabela
function atualizaTabela() {
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Limpar a tabela antes de adicionar os dados

    // Adiciona os dados na tabela
    dados.forEach((dado, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.textContent = index + 1;
        td2.textContent = dado.livro;
        td3.textContent = dado.autor;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });
}

// Função para ordenar os dados alfabeticamente
function ordenarTabela() {
    dados.sort((a, b) => a.livro.localeCompare(b.livro)); // Ordena pelo nome do livro
    atualizaTabela(); // Atualiza a tabela após ordenar
}

// Botão de ordenação
const ordenarBtn = document.getElementById('ordenar');
ordenarBtn.addEventListener('click', ordenarTabela);

// Função para garantir 10 linhas fixas (se necessário)
function criarLinhasFixas() {
    const tbody = table.querySelector('tbody');
    while (tbody.rows.length < 10) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.textContent = '';
        td2.textContent = '';
        td3.textContent = '';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
}

// Garantir 10 linhas fixas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    criarLinhasFixas();
    atualizaTabela();
});
