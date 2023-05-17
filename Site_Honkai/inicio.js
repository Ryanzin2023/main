function login() {
    var usernameInput = document.getElementById("login-username");
    var passwordInput = document.getElementById("login-password");
    var loginMsg = document.getElementById("login-msg");
  
    var username = usernameInput.value;
    var password = passwordInput.value;
  

    if (username.trim() !== "" && password.trim() !== "") {

      window.location.href = "site.html";
      return false; 
    } else {

      loginMsg.innerHTML = "Credenciais inválidas. Por favor, tente novamente.";
      loginMsg.style.display = "block";
      usernameInput.value = "";
      passwordInput.value = "";
      return false; 
    }
  }
  