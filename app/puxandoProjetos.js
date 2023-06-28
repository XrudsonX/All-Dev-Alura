const areaProjetos = document.getElementById('projetos');
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

projetos.forEach(projeto => {
    criaProjeto(projeto)
});
const listaProjetos = document.querySelectorAll('.container__codigo-area');

if(listaProjetos.length === 0){
    areaProjetos.innerHTML = `<h2 class = "mensagem">Ainda não há projetos criados!</h2>`
}

tiraEspaço();
highlightAll();

function criaProjeto (projeto) {

    areaProjetos.innerHTML += `
         <li class="container__codigo-area">
            <div class="container__background" style = "background-color: ${projeto.cor}">
            <button id="cor" value="${projeto.cor}"></button>
                <div class="container__input">
                    <ul class="bolinhas">
                        <li><img src="./img/bolinhas/vermelha.svg" alt=""></li>
                        <li><img src="./img/bolinhas/amarela.svg" alt=""></li>
                        <li><img src="./img/bolinhas/verde.svg" alt=""></li>
                    </ul>
                    <div class= "botoes">
                        <div id = "btnExcluir">
                        <img src="../img/icone-excluir.svg" class = "excluir-icone"></img>
                        </div>
                        <div id = "btnEditor">
                        <img src="../img/editor.svg" class = "editar-icone"></img>
                        </div>
                    </div>
                    <button id = "linguagem" value= "${projeto.linguagem}"></button>
                    <div class="codigo">
                    <code class = "preview hljs ${projeto.linguagem}" data-id="${projeto.id}"><xmp>
                        ${projeto.codigo}</xmp>
                    </code> 
                    </div>


                </div>
            </div>

            <div class="apresentacao-projeto">
                <h3 class="apresentacao__titulo">${projeto.nome}</h3>
                <p class="apresentacao__descricao">${projeto.descricao}</p>
            </div>

            <div class="social-projeto">
                <div class="interacoes">
                    <ul class="interacoes__lista">
                        <li class="interacoes__item">
                            <img src="./img/icone--comentario.svg" alt="comentarios">
                            <p>90</p>
                        </li>
                        <li class="interacoes__item">
                            <img src="./img/icone--coracao.svg" alt="curtidas">
                            <p>90</p>
                        </li>
                    </ul>
                </div>

                <div class="social-perfil">
                    <img src="./img/foto.png" alt="foto do autor" class="social-perfil__foto">
                    <p class="social-perfil__nome">@Rudson</p>
                </div>
            </div>
            
        </li>`
}

function tiraEspaço () {
    const textos = document.querySelectorAll('.preview');
    textos.forEach(texto => {
        texto.textContent = texto.textContent.replace(/^\s+/, "");
        
    });
}

function highlightAll(){
    const codigos = document.querySelectorAll('.preview')
    codigos.forEach(codigo => {
        hljs.highlightElement(codigo)
    });
}


