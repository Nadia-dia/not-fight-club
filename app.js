// REGISTER.HTML
// Submit button pressed - on register.html

function validateForm(event){
  event.preventDefault(); 
  const input= document.querySelector(".input");
  const username = input.value;

  if(username.trim()===""){
    alert("Please, fill username field. Value couldn't be empty.");
    input.value="";
  } else {
    // Saving username variable
    localStorage.setItem("username", username);
    
    // Checking wins & loses variables and setting them if don't exist
    if(localStorage.getItem("winsCounter") === null){
      localStorage.setItem("winsCounter", "0");
    }

    if(localStorage.getItem("losesCounter") === null){
      localStorage.setItem("losesCounter", "0");
    }
    
    window.location.href = "index.html";
  };
};


const form=document.querySelector(".register-form");
if(form){form.addEventListener("submit", validateForm);};

// INDEX.HTML
// Nav buttons pressed - on index.html
const links = document.querySelectorAll(".item__link")
links.forEach(link => {
  if(link){
    link.addEventListener("click", event => {
      event.preventDefault(); 
    
      //prevent reload if already on that page
      let current = window.location.pathname.split("/").pop();
      if (current === "") current = "index.html"; // default
      const target=link.getAttribute("href");

      if(current !== target){
        window.location.href=target;         
      }
    });
  }
});

// Fight button pressed - on index.html
const fightButton = document.querySelector(".fight-button");

if(fightButton){
  fightButton.addEventListener("click", event => {
    event.preventDefault(); 
    window.location.href = "fight.html";
  });
};

// CHARACTER.HTML
// Username in title, wins & loses counter 
const characterName = document.querySelector(".character__information-name");
const wins = document.querySelector(".wins");
const loses = document.querySelector(".loses");

if(characterName && wins && loses){
  characterName.innerText = localStorage.username;
  wins.insertAdjacentText("beforeend", localStorage.winsCounter);
  loses.insertAdjacentText("beforeend", localStorage.losesCounter);
}