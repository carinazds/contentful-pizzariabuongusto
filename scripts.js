let spaceId = 's2all48eaxus'; 
let accessToken = 'sXVcNhQLkNMf0tYVdlffqf7UXAP0r7NVVDn3ZyAAsmc';
let apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`;

async function fetchMenu() {                                                                                                                    

    try {
      // Fazendo a requisição para o Contentful
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data)

        const pizza1 = data.items[0].fields.pizza1;
        const pizza2 = data.items[0].fields.pizza2;
        const pizza3 = data.items[0].fields.pizza3;
        const pizza4 = data.items[0].fields.pizza4;
        const pizza5 = data.items[0].fields.pizza5;
        const pizza6 = data.items[0].fields.pizza6;
        const pizza7 = data.items[0].fields.pizza7;
        const pizza8 = data.items[0].fields.pizza8;
        const pizza9 = data.items[0].fields.pizza9;

        const endereco = data.items[0].fields.endereo;
        const cidade = data.items[0].fields.cidade;

        const nome = data.items[0].fields.nome;
        const sabor = data.items[0].fields.sabor;
        const labelEndereco = data.items[0].fields.labelEndereco;
        const telefone = data.items[0].fields.telefone;

        const estabelecimento = data.items[0].fields.estabelecimento;

        document.getElementById("pizza1").innerHTML = pizza1;
        document.getElementById("pizza2").innerHTML = pizza2;
        document.getElementById("pizza3").innerHTML = pizza3;
        document.getElementById("pizza4").innerHTML = pizza4;
        document.getElementById("pizza5").innerHTML = pizza5;
        document.getElementById("pizza6").innerHTML = pizza6;
        document.getElementById("pizza7").innerHTML = pizza7;
        document.getElementById("pizza8").innerHTML = pizza8;
        document.getElementById("pizza9").innerHTML = pizza9;

        document.getElementById("endereco").innerHTML = endereco;
        document.getElementById("cidade").innerHTML = cidade;

        document.getElementById("label-nome").innerHTML = nome;
        document.getElementById("label-sabor").innerHTML = sabor;
        document.getElementById("label-endereco").innerHTML = labelEndereco;
        document.getElementById("telefone").innerHTML = telefone;

        document.getElementById("estabelecimento").innerHTML = estabelecimento;
  
    } catch (error) {
      console.error('Erro ao buscar dados do Contentful:', error);
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    fetchMenu(); // Chama a função fetchMenu quando o DOM estiver completamente carregado
});