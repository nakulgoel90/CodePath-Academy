function sendMessage() {

  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.innerText = input.value;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.innerText = "AI is thinking...";
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple demo login (later backend connect karenge)
  if (email === "nakul@gmail.com" && password === "1234") {

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";

  } else {
    alert("Invalid Credentials");
  }
}
function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Account Created Successfully!");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields");
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
  }
}

function resetPassword() {
  const email = document.getElementById("forgotEmail").value;

  if (email) {
    alert("Reset link sent to " + email);
    window.location.href = "login.html";
  } else {
    alert("Enter your email");
  }
}