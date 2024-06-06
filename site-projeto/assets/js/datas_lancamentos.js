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
const releaseDateHellblade = new Date('June 2, 2024 03:12:00').getTime();

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