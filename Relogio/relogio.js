function atualizarRelogio() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    document.getElementById("horaAtual").innerText = hora;
    document.getElementById("minutosAtual").innerText = minutos;
    document.getElementById("segundosAtual").innerText = segundos;
}

document.addEventListener("DOMContentLoaded", function() {
    atualizarRelogio(); 
    setInterval(atualizarRelogio, 1000); 
});
