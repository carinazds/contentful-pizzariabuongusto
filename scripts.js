// Função para enviar os dados do formulário para o WhatsApp
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    // Coleta os valores dos campos
    var nome = document.getElementById('nome').value;
    var sabor = document.getElementById('sabor').value;
    var endereco = document.getElementById('endereco').value;
    var celular = document.getElementById('celular').value;

    // Formata a mensagem para o WhatsApp
    var mensagem = `Olá! Gostaria de fazer um pedido na Pizzaria Boun Gusto.\n\nNome: ${nome}\nSabor da Pizza: ${sabor}\nEndereço: ${endereco}\nTelefone: ${celular}`;

    // URL para redirecionar para o WhatsApp
    var whatsappUrl = `https://wa.me/5511976835325?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.location.href = whatsappUrl;

    // Exibe a mensagem de sucesso
    document.getElementById('msg-sucesso').style.display = 'block';
});
