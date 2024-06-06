
// Função para mostrar a imagem do xbox
function changeImage() {
    const imagemGrande = document.getElementById('imagemGrande');
    imagemGrande.setAttribute('src', 'https://m.media-amazon.com/images/I/91Y7aOJc3rL.jpg');
}

function restoreImage() {
    const imagemGrande = document.getElementById('imagemGrande');
    imagemGrande.setAttribute('src', 'assets/img/produtos/minecraft/minecraft-capa-principal.jpg');
}

function redirectToPage() {
    window.location.href = "index.html";
}

function alternarDropdown() {
    document.querySelector('.lista_suspensa_de_quantidade').classList.toggle('show');
}

// Função para exibir/ocultar o menu suspenso
function alternarDropdown() {
  document.querySelector('.lista_suspensa_de_quantidade').classList.toggle('show');
}

// Função para definir a quantidade selecionada
function quantidade(quantity) {
  document.getElementById('quantidade_atual').innerText = quantity;
  document.querySelector('.lista_suspensa_de_quantidade').classList.remove('show');
}

// Evento de clique no documento para fechar o menu suspenso ao clicar fora dele
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.lista_suspensa_de_quantidade');
  const target = event.target;
  const isDropdownClicked = dropdown.contains(target);
  const isSelectorClicked = target.classList.contains('quantidade_selecionada');
  
  if (!isDropdownClicked && !isSelectorClicked) {
    dropdown.classList.remove('show');
  }
});

// Evento para trocar a imagem quando passa o mouse
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const imagemGrande = document.getElementById('imagemGrande');

    // Adicionando ouvinte de evento para cada miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function() {
            const imageUrl = this.getAttribute('src');
            imagemGrande.setAttribute('src', imageUrl);
        });
    });

    const imagem = document.getElementById('imagemClassificacao');
    const aviso = document.getElementById('avisoClassificacao');

    imagem.addEventListener('mouseover', () => {
        aviso.style.display = 'block';
    });

    imagem.addEventListener('mouseout', () => {
        aviso.style.display = 'none';
    });
});






