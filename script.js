const formulario=document.getElementById("meuFormulario");    <!-- Cria constante fomulario e pegua elemento por iD-->
formulario.addEventListener("Submit",function(evento){    <!--Cria escutador de evento -> submit-->
    evento.preventDefault();    <!--Nao recarregar pagina-->

    <!-- Cria contantes e pegua elementos do formulario pelo Id, somente o valor-->
    const novoNomea = document.GetElementById("aname").value;
    const novoNomel= document.GetElementById("lname").value;
    const novoImagem = document.GetElementById("imegem").value;

    <!--Constante que grupa informações do formulario -->
    const novo={
    nomeAutor: novoNomea,
    nomelivro: novoNomel,
    imagem: novoImagem,
    };
})



