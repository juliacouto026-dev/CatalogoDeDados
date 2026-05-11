const formulario=document.getElementById("meuFormulario");   // Cria constante fomulario e pegua elemento por iD//
formulario.addEventListener("submit",function(evento){    //Cria escutador de evento -> submit//
    evento.preventDefault();    //Nao recarregar pagina//

    //Cria contantes e pegua elementos do formulario pelo Id, somente o valor//
    const novoNomea = document.getElementById("aname").value;
    const novoNomel= document.getElementById("lname").value;
    const novoImagem = document.getElementById("imagem").value;

    //Constante que grupa informações do formulario //
    const novo={
    nomeAutor: novoNomea,
    nomeLivro: novoNomel,
    imagem: novoImagem,
    };

    //Criando card//
    const card =`
        <div class="card">
            <img src="${novo.imagem}">
            <h3>"${novo.nomeLivro}"</h3>
            <h4>"${novo.nomeAutor}"</h4>
           </div>
    `;
    const colecao = document.getElementById("colecao");
    colecao.innerHTML += card;
    formulario.reset();


})




