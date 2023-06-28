const containerPrincipal = document.querySelector('.container__principal');
const dados = JSON.parse(localStorage.getItem("edicao"));

criaEdicao();

function criaEdicao() {
    containerPrincipal.innerHTML =
        `
                <div class="menu">
                        <h2 class="menu__titulo titulo">MENU</h2>
                        <ul class="menu__lista">
                            <li class="menu__item">
                                <div class="menu__item-icone">
                                    <img src="./img/icone--codigo.svg" alt="">
                                </div>
                                <p class="menu__item--texto">Editor de código</p>
                            </li>
                            <a href="./index.html" class="link">
                                <li class="menu__item comunidade">
                                    <div class="menu__item-icone">
                                        <img src="./img/icone--comunidade.svg" alt="">
                                    </div>
                                    <p class="menu__item--texto">Comunidade</p>
                                </li>
                            </a>
                        </ul>

                        <a href="https://github.com/RudsonAbraao" class="link">
                            <div class="menu__perfil">
                                <img src="./img/foto.png" alt="foto de perfil" srcset="" class="foto__perfil">
                                <h2 class="perfil__nome">Rudson A.</h2>
                            </div>

                        </a>
                    </div>

                    <div class="container__codigo">
                        <div class="container__background" style="background-color: ${dados.cor}">
                        <button id="cor" value=""></button>
                            <div class="container__input">
                                <ul class="bolinhas">
                                    <li><img src="./img/bolinhas/vermelha.svg" alt=""></li>
                                    <li><img src="./img/bolinhas/amarela.svg" alt=""></li>
                                    <li><img src="./img/bolinhas/verde.svg" alt=""></li>
                                </ul>
                                <div class="codigo">
                                    <code contenteditable="true" class="preview hljs"><xmp>${dados.codigo}</xmp>
                                    </code>
                                </div>


                            </div>

                        </div>
                        <button class="btn__highlight" id="btnHighlight">Visualizar com o highlight</button>

                    </div>

                    <div class="container__direito">
                        <div class="projeto">
                            <h2 class="projeto__titulo titulo">SEU PROJETO</h2>
                            <input type="text" class="projeto__titulo--input input" placeholder="Nome do seu projeto" value= "${dados.nome}">
                            <textarea name="descricao" id="" cols="30" rows="3" placeholder="Descrição do seu projeto"
                                class="projeto__descricao input">${dados.descricao}</textarea>
                        </div>

                        <div class="personalizacao">
                            <h2 class="personalizacao__titulo titulo">Personalização</h2>

                            <div class="personalizacao__opcoes">
                                <select name="linguagens" id="linguagens" class="personalizacao__linguagens input"   >
                                    <option value="JavaScript" id="linguagemItem" >JavaScript</option>
                                    <option value="css" id="linguagemItem">Css</option>
                                    <option value="html" id="linguagemItem">Html</option>
                                </select>

                                <input type="color" name="corDeFundo" id="corDeFundo" class="personalizacao__cores" value = "${dados.cor}">

                            </div>

                            <button class="btn__salvarProjeto">Salvar projeto</button>

                    </div>
                </div>
        `
    selecionaLinguagem();

}

function selecionaLinguagem() {
    const opcoes = document.querySelectorAll('#linguagemItem');
    const opcoesConvertida = Array.from(opcoes);
    const linguagem = dados.linguagem;
    const linguagemSelecionada = opcoesConvertida.find(element => element.value === dados.linguagem);
    linguagemSelecionada.setAttribute('selected', '')
}

