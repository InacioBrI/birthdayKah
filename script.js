// Senha e acesso fixos para autenticação
const correctUsername = "namorada@example.com";
const correctPassword = "1234";

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    // Redireciona para a página de aniversário
    window.location.href = "aniversario.html"; 
  } else {
    // Exibe a mensagem de erro
    document.getElementById("error-message").style.display = "block";
  }

  document.getElementById("forgot").addEventListener("click", function() {
    // Exibe a mensagem
    document.getElementById("message").style.display = "block";
  });


});

