const linguagem = document.querySelector('.personalizacao__linguagens');
const areaDoCodigo = document.querySelector('.codigo');
const botao = document.querySelector('#btnHighlight');
const inputCor = document.getElementById('corDeFundo');
const corDeFundo = document.querySelector('.container__background');
const btnMenu = document.querySelector('.icone__menu');

botao.addEventListener('click', aplicaHighlight)
inputCor.addEventListener('input', mudarCor);


function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class = "preview hljs ${linguagem.value}" contenteditable="true" aria-label= "Editor de código"></code> `;
    areaDoCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
};

function mudarCor() {
    let cor = inputCor.value;
    let dadoCor = document.getElementById('cor');
    corDeFundo.style.backgroundColor = cor;
    dadoCor.value = cor;
    // localStorage.setItem('cor', JSON.stringify(cor));
}







