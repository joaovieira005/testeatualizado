document.addEventListener("DOMContentLoaded", function() {
    var jogosExtras = document.getElementById("jogosExtras");
    var mostrarMaisBtn = document.getElementById("mostrarMaisBtn");

    // Restaurar o estado dos jogos extras a partir do armazenamento local
    var oculto = localStorage.getItem("jogosExtrasOcultos") === "true";

    // Se o estado estiver oculto, oculte os jogos extras e altere o texto do botão
    if (oculto) {
        jogosExtras.style.display = "none";
        mostrarMaisBtn.textContent = "Mostrar Mais";
    } else {
        mostrarMaisBtn.textContent = "Mostrar Menos"; // Se já estiver visível, altere o texto do botão
    }

    // Adicione um evento de clique ao botão "Mostrar Mais"
    mostrarMaisBtn.addEventListener("click", function() {
        // Alterne entre ocultar e exibir os jogos extras ao clicar no botão
        if (jogosExtras.style.display === "none") {
            jogosExtras.style.display = "flex";
            this.textContent = "Mostrar Menos"; // Mude o texto do botão
            // Salve o estado visível no armazenamento local
            localStorage.setItem("jogosExtrasOcultos", "false");
        } else {
            jogosExtras.style.display = "none";
            this.textContent = "Mostrar Mais"; // Mude o texto do botão
            // Salve o estado oculto no armazenamento local
            localStorage.setItem("jogosExtrasOcultos", "true");
        }
    });
});