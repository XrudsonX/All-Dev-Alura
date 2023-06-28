const listaProjetos = document.getElementById("projetos");
const codigo = document.querySelector('.preview');
const nome = document.querySelector('.projeto__titulo--input');
const descricao = document.querySelector('.projeto__descricao');
const linguagem = document.querySelector('.personalizacao__linguagens')
const cor = document.querySelector('.personalizacao__cores');
const btnSalvarProjeto = document.querySelector('.btn__salvarProjeto')
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
const id =JSON.parse(localStorage.getItem("edicao")).id;



btnSalvarProjeto.addEventListener('click', () => {

    const itemAtual = {
        "codigo": codigo.textContent,
        "nome": nome.value,
        "descricao": descricao.value,
        "linguagem": linguagem.value,
        "cor": cor.value,
    }

    if(id){
        atualizaProjeto();
        window.alert('Projeto editado!')
    }else {
        itemAtual.id = projetos[projetos.length-1]?(projetos[projetos.length-1]).id + 1 : 0;

        projetos.push(itemAtual);

        localStorage.setItem("projetos", JSON.stringify(projetos));

        window.alert('Projeto criado!')

    }
});




function atualizaProjeto (){
    let projetoSendoEditado = projetos.find(projeto => projeto.id == id)

    projetoSendoEditado.codigo = codigo.textContent;
    projetoSendoEditado.nome = nome.value;
    projetoSendoEditado.descricao = descricao.value;
    projetoSendoEditado.linguagem = linguagem.value;
    projetoSendoEditado.cor = cor.value;
    projetoSendoEditado.id = id;

    localStorage.setItem("projetos", JSON.stringify(projetos));
}

