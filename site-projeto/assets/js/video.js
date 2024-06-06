let tooltipTimeout;

function toggleMute() {
    const video = document.getElementById('video');
    const muteIcon = document.getElementById('muteIcon');

    if (video.muted) {
        video.muted = false;
        muteIcon.classList.remove('fa-volume-xmark');
        muteIcon.classList.add('fa-volume-high');
    } else {
        video.muted = true;
        muteIcon.classList.remove('fa-volume-high');
        muteIcon.classList.add('fa-volume-xmark');
    }
}

function togglePlayPause() {
    const video = document.getElementById('video');

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateIcons() {
    const video = document.getElementById('video');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const playPauseIcons = document.getElementById('playPauseIcons');

    if (video.paused) {
        playPauseIcons.style.display = 'block';
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    } else {
        playPauseIcons.style.display = 'block';
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }
}

document.addEventListener('keydown', function (event) {
    const video = document.getElementById('video');
    const muteIcon = document.getElementById('muteIcon');

    if (event.key === ' ') { // Tecla de espaço
        togglePlayPause();
    } else if (event.key === 'Enter') { // Tecla Enter
        toggleMute();
    } else if (event.key === 'ArrowUp') { // Seta para cima (aumentar volume)
        if (video.volume < 1) {
            video.volume += 0.1;
            if (video.volume > 0) {
                muteIcon.classList.remove('fa-volume-xmark');
                muteIcon.classList.add('fa-volume-high');
            }
        }
    } else if (event.key === 'ArrowDown') { // Seta para baixo (diminuir volume)
        if (video.volume > 0) {
            video.volume -= 0.1;
            if (video.volume === 0) {
                muteIcon.classList.remove('fa-volume-high');
                muteIcon.classList.add('fa-volume-xmark');
            }
        }
    }
});

function rewindVideo() {
    const video = document.getElementById('video');
    video.currentTime -= 15; // Retrocede o vídeo em 15 segundos
}

function forwardVideo() {
    const video = document.getElementById('video');
    video.currentTime += 15; // Avança o vídeo em 15 segundos
}

function toggleFullscreen() {
    const video = document.getElementById('video');
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.error('Erro ao tentar entrar em modo de tela cheia:', err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

let playbackRate = 1; // Velocidade de reprodução padrão
let speedMessageTimeout; // Variável para armazenar o temporizador

function decreaseSpeed() {
    const video = document.getElementById('video');
    if (playbackRate > 0.25) { // Verifica se a velocidade está acima do mínimo (0.25x)
        playbackRate -= 0.1; // Diminui a velocidade em 0.1
        video.playbackRate = playbackRate;
        showSpeedMessage(playbackRate);
    }
}

function increaseSpeed() {
    const video = document.getElementById('video');
    if (playbackRate < 2) { // Verifica se a velocidade está abaixo do máximo (2x)
        playbackRate += 0.1; // Aumenta a velocidade em 0.1
        video.playbackRate = playbackRate;
        showSpeedMessage(playbackRate);
    }
}

function showSpeedMessage(speed) {
    const speedMessage = document.getElementById('speedMessage');
    speedMessage.textContent = `Velocidade: ${speed.toFixed(2)}x`;

    // Limpa o temporizador anterior (se houver)
    clearTimeout(speedMessageTimeout);

    // Define um novo temporizador para ocultar a mensagem após 3 segundos
    speedMessageTimeout = setTimeout(function () {
        speedMessage.textContent = ''; // Limpa o conteúdo da mensagem
    }, 3000); // 3 segundos
}

let controlsTimeout;

// Função para esconder os controles e o botão após 5 segundos sem interação
function hideControls() {
    const controls = document.querySelector('.video-controls');
    const button = document.querySelector('.inicio-texto .btn');
    controls.style.opacity = 0; // Define a opacidade dos controles para 0 para ocultá-los
    button.classList.add('hidden'); // Adiciona a classe 'hidden' ao botão
}

// Função para mostrar os controles e o botão
function showControls() {
    const controls = document.querySelector('.video-controls');
    const button = document.querySelector('.inicio-texto .btn');
    controls.style.opacity = 1; // Define a opacidade dos controles para 1 para mostrá-los novamente
    button.classList.remove('hidden'); // Remove a classe 'hidden' do botão

    // Limpa o temporizador anterior (se houver)
    clearTimeout(controlsTimeout);

    // Define um novo temporizador para ocultar os controles e o botão após 5 segundos sem interação
    controlsTimeout = setTimeout(function () {
        hideControls();
    }, 5000); // 5 segundos
}

const video = document.getElementById('video');

video.addEventListener('play', function () {
    const button = document.querySelector('.inicio-texto .btn');
    button.classList.add('hidden'); // Esconde o botão quando o vídeo está em reprodução
});

video.addEventListener('pause', function () {
    showControls(); // Mostra os controles e o botão quando o vídeo está pausado
});

video.addEventListener('mousemove', function () {
    showControls(); // Chama a função para mostrar os controles quando o mouse é movido dentro do vídeo
});

document.addEventListener('DOMContentLoaded', function () {
    hideControls(); // Chama a função para esconder os controles quando a página é carregada
});

const rewindToStartButton = document.getElementById('rewindToStartButton');

video.addEventListener('ended', function () {
    rewindToStartButton.style.display = 'inline'; // Mostra o botão de retroceder ao início
});

function rewindToStart() {
    video.currentTime = 0; // Define o tempo atual do vídeo como 0 (início)
    rewindToStartButton.style.display = 'none'; // Oculta o botão novamente
}

const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const muteIcon = document.getElementById('muteIcon');
const rewindButton = document.getElementById('rewindButton');
const forwardButton = document.getElementById('forwardButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const decreaseSpeedButton = document.getElementById('decreaseSpeedButton');
const increaseSpeedButton = document.getElementById('increaseSpeedButton');

playIcon.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Reproduzir");
    }, 1000);
});

playIcon.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

pauseIcon.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Pausar");
    }, 1000);
});

pauseIcon.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

muteIcon.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        if (video.volume === 0) {
            showTooltip("Ativar Som");
        } else {
            showTooltip("Desativar Som");
        }
    }, 1000);
});

muteIcon.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

rewindButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Retroceder");
    }, 1000);
});

rewindButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

forwardButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Avançar");
    }, 1000);
});

forwardButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

fullscreenButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Tela Cheia");
    }, 1000);
});

fullscreenButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

decreaseSpeedButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Diminuir Velocidade");
    }, 1000);
});

decreaseSpeedButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

increaseSpeedButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Aumentar Velocidade");
    }, 1000);
});

increaseSpeedButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

rewindToStartButton.addEventListener('mouseover', function() {
    tooltipTimeout = setTimeout(function() {
        showTooltip("Rebobinar para o Início");
    }, 1000);
});

rewindToStartButton.addEventListener('mouseout', function() {
    clearTimeout(tooltipTimeout);
    hideTooltip();
});

function showTooltip(text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Data de lançamento (30/8/2024 00:00 BRT)
var dataLancamento = new Date("August 30, 2024 00:00:00 GMT-0300");

// Função para atualizar o cronômetro
function atualizarCronometro() {
    var agora = new Date().getTime();
    var diferenca = dataLancamento - agora;

    // Calcular dias, horas, minutos e segundos restantes
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Formatar o resultado
    var resultado = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Atualizar o elemento de contagem regressiva
    document.getElementById("countdown").innerHTML = resultado;

    // Atualizar a cada segundo
    setTimeout(atualizarCronometro, 1000);
}

// Iniciar o cronômetro
atualizarCronometro();

/* outras img dentro do jogo */
var currentIndex = 0;
var images = document.querySelectorAll('#carouselImages img');
var interval;

function startCarousel() {
    if (!interval) {
        interval = setInterval(changeImage, 5000);
    }
}

function stopCarousel() {
    clearInterval(interval);
    interval = null;
    resetCarousel();
}

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

function resetCarousel() {
    images.forEach(function(img, index) {
        img.style.display = index === 0 ? 'block' : 'none';
    });
    currentIndex = 0;
}

// Cronômetro para "Call of Duty: Modern Warfare III"
function iniciarCronometroCOD() {
    const endDate = new Date('2024-06-06T03:59:00-03:00').getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown-cod').innerHTML =
            `Oferta termina em ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-cod').innerHTML = "A promoção terminou";
        }
    }, 1000);
}

// Iniciar cronômetro para "Call of Duty: Modern Warfare III"
iniciarCronometroCOD();





