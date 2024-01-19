/*function tocaSom () {
    document.querySelector('audio').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador++;

}*/
document.addEventListener('DOMContentLoaded', function () {
    // Seletor para todos os botões
    var buttons = document.querySelectorAll('button');

    // Adicionar evento de clique a cada botão
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obter o ID do botão clicado
            var buttonId = this.id;

            // Obter o elemento de áudio correspondente ao botão clicado
            var audioElement = document.getElementById('som' + buttonId.slice(-1));

            // Verificar se o elemento de áudio existe
            if (audioElement) {
                // Reproduzir o som
                audioElement.play();
            }
        });
    });
});
