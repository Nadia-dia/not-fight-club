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

// Nav buttons pressed -- fix!
document.querySelectorAll(".item__link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); 
    
    //prevent reload if already on that page
    let current = window.location.pathname.split("/").pop();
    console.log(current);
    if (current === "") current = "index.html"; // default
    const target=link.getAttribute("href");

    if(current !== target){
      window.location.href=target;       
    } else{
      link.classList.add("active"); 
    };
  });
})