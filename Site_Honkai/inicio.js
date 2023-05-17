function login() {
    var usernameInput = document.getElementById("login-username");
    var passwordInput = document.getElementById("login-password");
    var loginMsg = document.getElementById("login-msg");
  
    var username = usernameInput.value;
    var password = passwordInput.value;
  
    // Realizar validação do login (exemplo simplificado)
    // Você pode implementar sua própria lógica de validação aqui
    if (username.trim() !== "" && password.trim() !== "") {
      // Redirecionar para a página "site.html"
      window.location.href = "site.html";
      return false; // Impedir o envio do formulário
    } else {
      // Exibir mensagem de erro de login
      loginMsg.innerHTML = "Credenciais inválidas. Por favor, tente novamente.";
      loginMsg.style.display = "block";
      usernameInput.value = "";
      passwordInput.value = "";
      return false; // Impedir o envio do formulário
    }
  }
  