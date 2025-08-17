// Submit button pressed

function validateForm(event){
  event.preventDefault(); 
  const input= document.querySelector(".input");
  const username = input.value;

  if(username.trim()===""){
    alert("Please, fill username field. Value couldn't be empty.");
    input.value="";
  } else {
    localStorage.setItem("username", username);
    window.location.href = "index.html";
  }
}

const form=document.querySelector(".register-form");
form.addEventListener("submit", validateForm);