const paginaEspecificaPorJogo = {
    "cyberpunk-2077": "index.html",
    "fifa-22": "index.html",
    "red-dead-redemption-2": "pagina_especifica_red_dead_redemption.html",
    "GrandTheftAutoV": "index.html"
};

const jogos = [
    { // Array de objetos com informações dos jogos
        "nome": "The Witcher 3: Wild Hunt",
        "preco": 49.99,
        "categoria": "RPG",
        "id": "the-witcher-3",
        "imagem": "https://m.media-amazon.com/images/I/81fPAYpa62L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "EA Sports FC 24",
        "preco": 275.52,
        "categoria": "Esportes",
        "id": "ea-sports-fc-24",
        "imagem": "assets/img/ea-sports-fc-24-capa.jpeg"
    },
    {
        "nome": "Cyberpunk 2077",
        "preco": 168.90,
        "categoria": "RPG",
        "id": "cyberpunk-2077",
        "imagem": "assets/img/trending1.webp"
    },
    {
        "nome": "Red Dead Redemption 2",
        "preco": 59.99,
        "categoria": "Ação e Aventura",
        "id": "red-dead-redemption-2",
        "imagem": "https://m.media-amazon.com/images/I/81ugFbYfs9L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "Assassin's Creed Valhalla",
        "preco": 49.99,
        "categoria": "Ação e Aventura",
        "id": "assassins-creed-valhalla",
        "imagem": "https://m.media-amazon.com/images/I/81f9z8QXv2L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "Call of Duty: Warzone",
        "preco": 0,
        "categoria": "Ação",
        "id": "call-of-duty-warzone",
        "imagem": "https://m.media-amazon.com/images/I/71NLzAsUnSL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "Minecraft",
        "preco": 29.99,
        "categoria": "Sobrevivência",
        "id": "minecraft",
        "imagem": "assets/img/minecraft-capa-uvhf326u6qg1.webp"
    },
    {
        "nome": "Death Stranding",
        "preco": 29.99,
        "categoria": "Ação",
        "id": "death-stranding",
        "imagem": "https://m.media-amazon.com/images/I/91AAOfiUSjL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "The Legend of Zelda: Breath of the Wild",
        "preco": 59.99,
        "categoria": "Ação e Aventura",
        "id": "legend-of-zelda-breath-of-the-wild",
        "imagem": "https://m.media-amazon.com/images/I/91pPCgMjGDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "Overwatch",
        "preco": 39.99,
        "categoria": "Ação",
        "id": "overwatch",
        "imagem": "https://m.media-amazon.com/images/I/714wARifwaL.jpg"
    },
    {
        "nome": "Horizon Zero Dawn",
        "preco": 19.99,
        "categoria": "Ação e Aventura",
        "id": "horizon-zero-dawn",
        "imagem": "https://m.media-amazon.com/images/I/91Y0iNd1EfL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "nome": "Little Nightmares II",
        "preco": 63.96,
        "categoria": "Ação",
        "id": "little-nightmares-II",
        "imagem": "https://example.com/caminho/para/a/imagem.jpg"
    }
];

const formPesquisa = document.getElementById("formPesquisa");
const campoPesquisa = document.getElementById("campoPesquisa");
const resultadosPesquisa = document.getElementById("resultadosPesquisa");

formPesquisa.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    pesquisarJogo();
});

campoPesquisa.addEventListener("input", function () {
    pesquisarJogo();
});

document.querySelector(".icone-pesquisa").addEventListener("click", function () {
    pesquisarJogo();
});

function pesquisarJogo() {
    const termoPesquisa = campoPesquisa.value.trim().toLowerCase();

    if (termoPesquisa.length >= 3) {
        const resultados = jogos.filter(jogo =>
            jogo.nome.toLowerCase().includes(termoPesquisa)
        );

        if (resultados.length === 0) {
            resultadosPesquisa.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        } else {
            resultadosPesquisa.innerHTML = ""; // Limpa os resultados anteriores

            resultados.forEach(jogo => {
                const divJogo = document.createElement("div");
                divJogo.classList.add("jogo-item-resul");

                const infoJogo = document.createElement("div");
                infoJogo.classList.add("jogo-info-resul");

                const nomeJogo = document.createElement("p");
                nomeJogo.textContent = "Nome: " + jogo.nome;

                const precoJogo = document.createElement("p");
                precoJogo.textContent = "Preço: " + jogo.preco.toFixed(2) + " R$";

                infoJogo.appendChild(nomeJogo);
                infoJogo.appendChild(precoJogo);

                const categoriaJogo = document.createElement("p");
                categoriaJogo.innerHTML = `<i class="fa-solid fa-list"></i> ${jogo.categoria}`; // Adiciona o ícone seguido pela categoria
                infoJogo.appendChild(categoriaJogo);

                divJogo.appendChild(infoJogo);

                // Botão de Compra
                const botaoCompra = document.createElement("button");
                botaoCompra.textContent = "Comprar";
                botaoCompra.classList.add("botao-compra"); // Adiciona classe para estilização
                botaoCompra.addEventListener("click", function () {
                    // Lógica para compra do jogo aqui
                    console.log("Compra do jogo: " + jogo.nome);
                });
                divJogo.appendChild(botaoCompra);

                const imagemJogo = document.createElement("img");
                imagemJogo.src = jogo.imagem;
                imagemJogo.alt = jogo.nome;
                imagemJogo.style.width = "140px";
                imagemJogo.style.height = "140px";
                imagemJogo.style.borderRadius = "5px";
                divJogo.appendChild(imagemJogo);

                // jogo 1 
                const linkJogo = document.createElement("a");
                if (jogo.id === "ea-sports-fc-24") {
                    linkJogo.href = "index.html";

                    // Cria um div para envolver o ícone do PlayStation
                    const divIconPlaystation = document.createElement("div");
                    divIconPlaystation.classList.add("icon-playstation");

                    // Adiciona o ícone do PlayStation dentro do div
                    const iconPlaystation = document.createElement("i");
                    iconPlaystation.classList.add("fa-brands", "fa-playstation", "white-icon");
                    divIconPlaystation.appendChild(iconPlaystation);

                    // Adiciona a div do ícone PlayStation após a categoria "Esportes"
                    infoJogo.insertBefore(divIconPlaystation, categoriaJogo.nextSibling);
                }
                else if (jogo.id === "overwatch") {
                    linkJogo.href = "Overwatch.html";
                }
                else if (jogo.id === "red-dead-redemption-2") {
                    linkJogo.href = "red-dead-redemption-2.html";
                }
                else if (jogo.id === 'cyberpunk-2077') {
                    linkJogo.href = 'index.html'
                }
                else if (jogo.id === 'minecraft') {
                    linkJogo.href = 'minicreft.html'
                }
                else {
                    const paginaEspecifica = paginaEspecificaPorJogo[jogo.id];
                    if (paginaEspecifica) {
                        linkJogo.href = paginaEspecifica;
                    } else {
                        linkJogo.href = `detalhes.html?id=${jogo.id}`;
                    }
                }
                linkJogo.appendChild(divJogo);

                resultadosPesquisa.appendChild(linkJogo);
            });


        }

        resultadosPesquisa.classList.add("show"); // Mostra os resultados
    } else {
        resultadosPesquisa.innerHTML = ""; // Limpa os resultados
        resultadosPesquisa.classList.remove("show"); // Oculta os resultados
    }
}

/* efeito para aparecer oos resultados */
document.addEventListener("DOMContentLoaded", function () {
    const delay = 4000;

    // Função para adicionar classe com atraso
    function adicionarClasseComDelay(elemento, classe, delay) {
        setTimeout(function () {
            elemento.classList.add(classe);
        }, delay);
    }

    // Aguarda o atraso e, em seguida, adiciona a classe para mostrar os resultados
    adicionarClasseComDelay(document.getElementById("resultadosPesquisa"), "show-results", delay);
});

/* efeito para sair do campo de pesquisa*/
document.addEventListener("DOMContentLoaded", function () {
    const campoPesquisa = document.getElementById("campoPesquisa");

    // Adiciona evento de input ao campo de pesquisa
    campoPesquisa.addEventListener("input", function () {
        if (this.value === "") {
            this.classList.add("remove-text");
        } else {
            this.classList.remove("remove-text");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const searchField = document.getElementById("campoPesquisa");
    const searchResults = document.getElementById("resultadosPesquisa");
    const clearButton = document.getElementById("limparCampo");

    // Mostrar resultados de pesquisa
    searchField.addEventListener("input", function () {
        if (searchField.value.trim() !== "") {
            searchResults.classList.add("show-results");
            searchResults.classList.add("has-results");
        } else {
            searchResults.classList.remove("show-results");
            searchResults.classList.remove("has-results");
        }
    });

    // Limpar campo de pesquisa
    clearButton.addEventListener("click", function () {
        searchField.value = "";
        searchResults.classList.remove("show-results");
        searchResults.classList.remove("has-results");
    });

    // Esconder resultados ao clicar fora do campo de pesquisa
    document.addEventListener("click", function (event) {
        if (!searchField.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.classList.remove("show-results");
            searchResults.classList.remove("has-results");
        }
    });

    // Evitar que o clique no campo de pesquisa esconda os resultados
    searchField.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchField = document.getElementById("campoPesquisa");
    const searchResults = document.getElementById("resultadosPesquisa");
    const clearButton = document.getElementById("limparCampo");
    const marioAnimation = document.getElementById("animacaoMario");
    const charWarning = document.createElement("div");

    charWarning.classList.add("char-warning");
    searchField.parentNode.appendChild(charWarning);

    // Mostrar animação e depois resultados de pesquisa
    searchField.addEventListener("input", function () {
        const searchLength = searchField.value.length;
        if (searchLength >= 3) {
            charWarning.style.display = 'none';
            marioAnimation.style.display = 'block';
            searchResults.style.display = 'none';
            setTimeout(function () {
                marioAnimation.style.display = 'none';
                searchResults.classList.add("show-results");
                searchResults.classList.add("has-results");
                searchResults.style.display = 'block';
            }, 1000); // 1 segundo para a animação
        } else {
            searchResults.classList.remove("show-results");
            searchResults.classList.remove("has-results");
            searchResults.style.display = 'none';
            charWarning.textContent = `Ainda faltam ${3 - searchLength} caracteres`;
            charWarning.style.display = 'block';
        }
    });

    // Limpar campo de pesquisa
    clearButton.addEventListener("click", function () {
        searchField.value = "";
        searchResults.classList.remove("show-results");
        searchResults.classList.remove("has-results");
        searchResults.style.display = 'none';
        charWarning.style.display = 'none';
    });

    // Esconder resultados ao clicar fora do campo de pesquisa
    document.addEventListener("click", function (event) {
        if (!searchField.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.classList.remove("show-results");
            searchResults.classList.remove("has-results");
            searchResults.style.display = 'none';
            charWarning.style.display = 'none';
        }
    });

    // Evitar que o clique no campo de pesquisa esconda os resultados
    searchField.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


/* aparecer o campo de pesquisa quando clica */
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('searchIcon');
    const formPesquisa = document.getElementById('formPesquisa');
    const campoPesquisa = document.getElementById('campoPesquisa');

    searchIcon.addEventListener('click', () => {
        formPesquisa.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!formPesquisa.contains(event.target) && !searchIcon.contains(event.target)) {
            formPesquisa.classList.remove('show');
        }
    });
});



/* datas de lançamentos */

    // Data de lançamento //s.t.a.l.k.e.r. 2: heart of chornobyl
    const releaseDate = new Date('September 5, 2024 00:00:00').getTime();

    // Atualiza a contagem regressiva a cada segundo
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = releaseDate - now;
    
        // Calcula o tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Exibe o resultado no elemento com id="countdown"
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        // Se a contagem regressiva terminar, exibe uma mensagem
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "Lançado!";
        }
    }, 1000);
    
    // Data de lançamento para Black Myth: Wukong
    const releaseDateWukong = new Date('August 20, 2024 00:00:00').getTime();
    
    // Atualiza a contagem regressiva a cada segundo para Black Myth: Wukong
    const countdownWukong = setInterval(() => {
        const now = new Date().getTime();
        const distance = releaseDateWukong - now;
    
        // Calcula o tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Exibe o resultado no elemento com id="countdown-wukong"
        document.getElementById('countdown-wukong').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        // Se a contagem regressiva terminar, exibe uma mensagem
        if (distance < 0) {
            clearInterval(countdownWukong);
            document.getElementById('countdown-wukong').innerHTML = "Lançado!";
        }
    }, 1000);
    
    // Data de lançamento para Senua’s Saga: Hellblade II
    const releaseDateHellblade = new Date('July 2, 2024 03:12:00').getTime();
    
    // Atualiza a contagem regressiva a cada segundo para Senua’s Saga: Hellblade II
    const countdownHellblade = setInterval(() => {
        const now = new Date().getTime();
        const distance = releaseDateHellblade - now;
    
        // Calcula o tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Exibe o resultado no elemento com id="countdown-hellblade"
        document.getElementById('countdown-hellblade').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        // Se a contagem regressiva terminar, exibe uma mensagem
        if (distance < 0) {
            clearInterval(countdownHellblade);
            document.getElementById('countdown-hellblade').innerHTML = "Lançado!";
        }
    }, 1000);
    
        // Data de lançamento para Star Wars Outlaws
        const releaseDateOutlaws = new Date('August 30, 2024 00:00:00 GMT-0300').getTime();
    
        const countdownOutlaws = setInterval(() => {
            const now = new Date().getTime();
            const distance = releaseDateOutlaws - now;
    
            // Calcula o tempo restante
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            document.getElementById('countdown-outlaws').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
            if (distance < 0) {
                clearInterval(countdownOutlaws);
                document.getElementById('countdown-outlaws').innerHTML = "Lançado!";
            }
        }, 1000);
    
    
            // Data de lançamento para Hades 2
            const releaseDateHades = new Date('July 6, 2024 00:00:00').getTime();
    
            // Atualiza a contagem regressiva a cada segundo para Hades 2
            const countdownHades = setInterval(() => {
                const now = new Date().getTime();
                const distance = releaseDateHades - now;
        
                // Calcula o tempo restante
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                // Exibe o resultado no elemento com id="countdown-hades"
                document.getElementById('countdown-hades').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
                // Se a contagem regressiva terminar, exibe uma mensagem
                if (distance < 0) {
                    clearInterval(countdownHades);
                    document.getElementById('countdown-hades').innerHTML = "Lançado!";
                }
            }, 1000);
    
                    // Data de lançamento para Warhammer 40,000: Space Marine 2
                    const releaseDateSpaceMarine = new Date('September 9, 2024 00:00:00').getTime();
    
                    // Atualiza a contagem regressiva a cada segundo para Warhammer 40,000: Space Marine 2
                    const countdownSpaceMarine = setInterval(() => {
                        const now = new Date().getTime();
                        const distance = releaseDateSpaceMarine - now;
                
                        // Calcula o tempo restante
                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                        // Exibe o resultado no elemento com id="countdown-space-marine"
                        document.getElementById('countdown-space-marine').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                
                        // Se a contagem regressiva terminar, exibe uma mensagem
                        if (distance < 0) {
                            clearInterval(countdownSpaceMarine);
                            document.getElementById('countdown-space-marine').innerHTML = "Lançado!";
                        }
                    }, 1000);







document.addEventListener('DOMContentLoaded', function () {
    var secao = document.querySelector('.secao-quem-somos');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                secao.classList.add('aparecer');
                observer.disconnect(); // Desconectar após aparecer
            }
        });
    }, { threshold: 0.1 }); // Ajuste o threshold conforme necessário

    observer.observe(secao);
});



// Jogos Vendidos Clientes Atendidos 
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');
    const duration = 5000; // 5 segundos para uma contagem mais rápida

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / (duration / 50); // Valor a incrementar a cada 50ms

        const updateCount = () => {
            let count = +counter.innerText.replace(/\D/g, '');

            if (count < target) {
                count = Math.ceil(count + increment);
                counter.innerText = `+${count.toLocaleString()}`; // Exibir número formatado com +
                setTimeout(updateCount, 35); 
            } else {
                counter.innerText = `+${target.toLocaleString()}`; // Exibir número final formatado com +
            }
        };

        updateCount();
    });
});


/* função para perguntas é respostas */
document.addEventListener('DOMContentLoaded', function () {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(details => {
        details.addEventListener('click', function () {
            detailsElements.forEach(otherDetails => {
                if (otherDetails !== details) {
                    otherDetails.removeAttribute('open');
                }
            });
        });
    });
});













