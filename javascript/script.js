function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5519982188429";

    const texto = ` Olá, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text= ${msgFormatada}`
    console.log(url)
    window.open(url, '_blank')
}