const filtro = document.querySelector('.navegacao__pesquisa');

filtro.addEventListener("input", () =>{
    let projetos = document.querySelectorAll('.container__codigo-area');

    if(filtro.value.length > 0){
        projetos.forEach(element => {
            let projeto = element;
            let nomeProjeto = element.querySelector('.apresentacao__titulo').textContent;

            var expressao = new RegExp(filtro.value,"i");
            if(!expressao.test(nomeProjeto)){
                projeto.classList.add("invisivel");
            }else {
                projeto.classList.remove("invisivel");
            }
        });
    } else {
        projetos.forEach(element => {
            var projeto = element;
            projeto.classList.remove("invisivel");
        });
    }

})