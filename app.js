const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight)   
 {
        footer.classList.add('animado');
      } else {
        footer.classList.remove('animado');
      }
    });

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa= document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "Nenhum resultado encontrado"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let funcoes = "";
    let proprietario = ""
    let imagem = ""

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        funcoes = dado.funcoes.toLowerCase()
        proprietario = dado.proprietario.toLowerCase()
        
    // se titulo || funcoes || descricao includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || funcoes.includes(campoPesquisa) || proprietario.includes(campoPesquisa)) {
    // Cria um novo elemento HTML para cada resultado
            console.log(titulo.includes(campoPesquisa))
            console.log(funcoes.includes(campoPesquisa))
            console.log(descricao.includes(campoPesquisa))

            resultados += `
                <div class="item-resultado">
                    <h2>
                            ${dado.imagem ? `<img src="${dado.imagem}" alt="${dado.titulo}">` : ''}
                    </h2>
                    <h2>
                         <a href=${dado.link} target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">LINK</a>
                </div>
            `;
        }
    }
if(!resultados) {
    resultados = "Nenhum resultado encontrado"
}
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}