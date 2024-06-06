document.addEventListener('DOMContentLoaded', function() {
    let jogosFavoritos = [];
    const mensagemFavorito = document.getElementById('mensagemFavorito');
    const jogosFavoritosContainer = document.getElementById('jogosFavoritosContainer');
    const heartIcon = document.querySelector('.borda .fa-heart');

    document.querySelectorAll('.jogo-item .fa-heart').forEach(coracao => {
        coracao.addEventListener('click', function() {
            const jogoItem = this.closest('.jogo-item');
            const jogoNome = jogoItem.querySelector('.jogo-info p:nth-child(1)').textContent;
            const jogoPreco = jogoItem.querySelector('.jogo-info p:nth-child(2)').textContent;
            const jogoExistenteIndex = jogosFavoritos.findIndex(jogo => jogo.nome === jogoNome);
            
            if (jogoExistenteIndex !== -1) {
                mostrarMensagem('Jogo já adicionado aos favoritos');
            } else {
                adicionarJogoFavorito(jogoNome, jogoPreco);
                mostrarMensagem('Produto adicionado aos favoritos');
                heartIcon.classList.add('coracao-vermelho');
                jogosFavoritosContainer.style.display = 'block';
            }
        });
    });

    heartIcon.addEventListener('click', function() {
        if (jogosFavoritosContainer.style.display === 'none' || jogosFavoritosContainer.style.display === '') {
            heartIcon.classList.add('coracao-vermelho');
            jogosFavoritosContainer.style.display = 'block';
            mostrarJogosFavoritos(jogosFavoritos);
            mostrarMensagem('Jogos favoritos exibidos');
        } else {
            heartIcon.classList.remove('coracao-vermelho');
            jogosFavoritosContainer.style.display = 'none';
            mostrarMensagem('Jogos favoritos ocultados');
        }
    });

    jogosFavoritosContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('jogo-favorito')) {
            window.location.href = 'index.html';
        }
    });

    function adicionarJogoFavorito(nome, preco) {
        jogosFavoritos.push({ nome: nome, preco: preco });
        mostrarJogosFavoritos(jogosFavoritos);
    }

    function removerJogoFavorito(nomeJogo) {
        jogosFavoritos = jogosFavoritos.filter(jogo => jogo.nome !== nomeJogo);
        mostrarJogosFavoritos(jogosFavoritos);
        mostrarMensagem('Jogo removido dos favoritos');
    }

    function mostrarJogosFavoritos(jogos) {
        jogosFavoritosContainer.innerHTML = '';
        if (jogos.length === 0) {
            const mensagemVazia = document.createElement('p');
            mensagemVazia.textContent = 'Nenhum jogo adicionado aos favoritos';
            mensagemVazia.style.color = 'white';
            jogosFavoritosContainer.appendChild(mensagemVazia);
        } else {
            jogos.forEach(jogo => {
                const jogoFavoritoHTML = document.createElement('div');
                jogoFavoritoHTML.classList.add('jogo-favorito');
                jogoFavoritoHTML.innerHTML = `
                    <span class="jogo-nome">${jogo.nome}</span>
                    <span class="jogo-preco">${jogo.preco}</span>
                    <i class="fa-solid fa-trash-can remover-favorito" data-nome="${jogo.nome}"></i>
                `;
                const removerIcone = jogoFavoritoHTML.querySelector('.remover-favorito');
                removerIcone.addEventListener('click', function() {
                    removerJogoFavorito(jogo.nome);
                });
                jogosFavoritosContainer.appendChild(jogoFavoritoHTML);
            });
        }
        jogosFavoritosContainer.style.display = 'block';
    }

    function mostrarMensagem(mensagem) {
        mensagemFavorito.textContent = mensagem;
        const heartIconRect = heartIcon.getBoundingClientRect();
        const mensagemFavoritoRect = mensagemFavorito.getBoundingClientRect();

        mensagemFavorito.style.top = `${window.scrollY + heartIconRect.bottom + 10}px`;
        mensagemFavorito.style.left = `${window.scrollX + heartIconRect.left + (heartIconRect.width - mensagemFavoritoRect.width) / 2}px`;
        mensagemFavorito.style.display = 'block';
        
        setTimeout(() => {
            mensagemFavorito.style.display = 'none';
        }, 3000);
    }
});








