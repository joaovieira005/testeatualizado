document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const footer = document.getElementById('footer');

    window.onscroll = function() {
        scrollFunction();
        checkFooterProximity();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (!backToTopButton.classList.contains("fade-in")) {
                backToTopButton.classList.remove("fade-out");
                backToTopButton.classList.add("fade-in");
                backToTopButton.style.display = "flex";
            }
        } else {
            if (backToTopButton.classList.contains("fade-in")) {
                backToTopButton.classList.remove("fade-in");
                backToTopButton.classList.add("fade-out");
                setTimeout(function() {
                    backToTopButton.style.display = "none";
                }, 500); // Tempo de duração da animação fade-out
            }
        }
    }

    function checkFooterProximity() {
        const footerRect = footer.getBoundingClientRect();
        const buttonRect = backToTopButton.getBoundingClientRect();

        // Verifica se o botão está próximo do footer (ajuste o valor conforme necessário)
        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            backToTopButton.classList.add("near-footer");
        } else {
            backToTopButton.classList.remove("near-footer");
        }
    }

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});