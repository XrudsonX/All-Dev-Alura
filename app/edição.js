const botoesEdicao = document.querySelectorAll('#btnEditor');
const botoesExcluir = document.querySelectorAll('#btnExcluir');
const btnEditor = document.querySelector('.editor');


btnEditor.addEventListener('click', ()=> {
    const zerarDados = {
        "nome": "",
        "codigo": "",
        "descricao": "",
        "cor": "#6BD1FF",
        "linguagem": "",
        "id": 0
    }

    localStorage.setItem("edicao", JSON.stringify(zerarDados));
    

})

botoesEdicao.forEach(botao => {
    botao.addEventListener('click', capturaDados)
});

botoesExcluir.forEach(botao => {
    botao.addEventListener('click', deletaProjeto)
});

function capturaDados (e){
    const codigoArea = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    let codigo = codigoArea.querySelector('code').innerText;
    let nome = codigoArea.querySelector('.apresentacao__titulo').innerText;
    let descricao = codigoArea.querySelector('.apresentacao__descricao').innerText;
    let cor = codigoArea.querySelector('#cor').value;
    let linguagem = codigoArea.querySelector('#linguagem').value;
    let id = codigoArea.querySelector('code').getAttribute('data-id');

    let dadosCodigo ={
        "nome": nome,
        "codigo": codigo,
        "descricao": descricao,
        "cor": cor,
        "linguagem": linguagem,
        "id": id
    }

    localStorage.setItem("edicao", JSON.stringify(dadosCodigo));
    window.location.href = "../Editor.html"
}

function deletaProjeto (e){
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
    const codigoArea = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    const id = codigoArea.querySelector('code').getAttribute('data-id');

    projetos.splice(projetos.findIndex(elemento => elemento.id == id),1);
    codigoArea.remove();

    localStorage.setItem("projetos", JSON.stringify(projetos))


}



