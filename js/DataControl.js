(() => {

    const abas = document.querySelectorAll('[data-aba]');

    //esconder conteudos 
    hideContent = () => {
        const contents = document.querySelectorAll('[data-content]');

        contents.forEach(content => content.classList.toggle('hide'))

    };

    //inativar abas 
    inactivate = () => {
        abas.forEach(aba => aba.classList.remove('active'))
    };

    //ativar conteudo
    activeContent = (valor) => {
        const content = document.querySelector(`[data-content="${valor}"]`);

        content.classList.toggle('hide')
    };

    //ativar a aba
    activateAba = (aba) => {
        aba.classList.add('active');
    };

    abas.forEach(aba => aba.addEventListener("click", () => {
        const valor = aba.dataset.abas;

        hideContent();
        inactivate();
        activateAba(aba);
        activeContent(valor);


    }))
})()