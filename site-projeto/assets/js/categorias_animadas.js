$(document).ready(function () {
    const $carousel = $('.carousel');
    const larguraCartao = $('.categoria-card').outerWidth(true); // inclui a margem
    const cartoesVisiveis = 4; // Sempre mostrar 4 cartões por vez
    const totalCartoes = $('.categoria-card').length;

    let posicaoScroll = 0;

    // Duplicando os cartões para criar o efeito infinito
    $carousel.append($('.categoria-card').clone());

    function moverCarrossel() {
        if (posicaoScroll >= totalCartoes * larguraCartao) {
            posicaoScroll = 0;
            $carousel.css('transition', 'none');
            $carousel.css('transform', 'translateX(-' + posicaoScroll + 'px)');
            setTimeout(() => {
                $carousel.css('transition', 'transform 0.5s ease-in-out');
            }, 0);
        } else if (posicaoScroll < 0) {
            posicaoScroll = (totalCartoes * larguraCartao) - (cartoesVisiveis * larguraCartao);
            $carousel.css('transition', 'none');
            $carousel.css('transform', 'translateX(-' + posicaoScroll + 'px)');
            setTimeout(() => {
                $carousel.css('transition', 'transform 0.5s ease-in-out');
            }, 0);
        }
        $carousel.css('transform', 'translateX(-' + posicaoScroll + 'px)');
    }

    $('.carousel-control.next').click(function () {
        posicaoScroll += larguraCartao * cartoesVisiveis;
        moverCarrossel();
    });

    $('.carousel-control.prev').click(function () {
        posicaoScroll -= larguraCartao * cartoesVisiveis;
        moverCarrossel();
    });
});