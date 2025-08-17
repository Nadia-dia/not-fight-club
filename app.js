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
  };
};

const form=document.querySelector(".register-form");
if(form){form.addEventListener("submit", validateForm);};

// Nav buttons pressed -- fix!
const links = document.querySelectorAll(".item__link")
links.forEach(link => {
  if(link){
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
  }
});

// Fight button pressed
const fightButton = document.querySelector(".fight-button");
console.log(fightButton);

if(fightButton){
  fightButton.addEventListener("click", event => {
    event.preventDefault(); 
    window.location.href = "fight.html";
  });
};