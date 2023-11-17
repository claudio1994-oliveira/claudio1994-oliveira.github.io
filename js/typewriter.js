document.addEventListener('DOMContentLoaded', function () {
    // Array de textos que serão exibidos com efeito de typewriter
    const texts = [
      "<?php ",
      "echo('Bem vindo!')",
      "?>",

    ];
  
    // Elemento onde o texto será exibido
    const textElement = document.getElementById('text');
  
    // Função para exibir o texto com efeito de typewriter
    function typeWriter(texts, textIndex, charIndex) {
      if (textIndex < texts.length) {
        const currentText = texts[textIndex];
  
        if (charIndex < currentText.length) {
          textElement.innerHTML += currentText.charAt(charIndex);
          charIndex++;
          setTimeout(function () {
            typeWriter(texts, textIndex, charIndex);
          }, 100); // Ajuste o valor do timeout para controlar a velocidade da digitação
        } else {
          // Se terminou de escrever o texto atual, passe para o próximo
          setTimeout(function () {
            textElement.innerHTML = ''; // Limpa o texto atual
            typeWriter(texts, (textIndex + 1) % texts.length, 0); // Próximo texto (loop ao atingir o último)
          }, 1000); // Ajuste o valor do timeout para controlar o tempo entre os textos
        }
      }
    }
  
    // Chama a função para iniciar o efeito
    typeWriter(texts, 0, 0);
  });
  