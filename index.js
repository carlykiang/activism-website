// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    
    let themeButton2 = document.getElementById("theme-button");
    themeButton2.classList.toggle("theme-button-light-mode");

    //toggling the text in the button
    if (themeButton2.innerHTML === "LIGHT MODE" ){
        themeButton2.textContent = "DARK MODE";
    } else{
    themeButton2.textContent = "LIGHT MODE";
    }

    /*console.log("Clicked dark mode!");*/
3
}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);



// TODO: Signature forms 
let signNowButton = document.getElementById("sign-now-button");
const form =
document.getElementById('sign-petition');
let count = 3;
const addSignature = (event) => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let state = document.getElementById("state").value;

    let signatureDiv = document.getElementById("signatures");
    let newSignature = document.createElement("p");
    const node = document.createTextNode("🖊️ " + fname + " " +lname + " from "+ state + " supports this.");
    newSignature.appendChild(node);
    signatureDiv.appendChild(newSignature);

    count = count + 1;
    let counter = document.getElementById("counter");
    counter.remove();
    let newCounter = document.createElement("p");
    newCounter.setAttribute('id','counter');
    const counterNode = document.createTextNode("🖊️ " + count + " people have signed this petition and support this cause.");
    newCounter.appendChild(counterNode);
    signatureDiv.appendChild(newCounter);

    console.log(fname);
    event.preventDefault();
}


const validateForm = () => {

    let containsErrors = false;
  
    let petitionInputs = document.getElementById("sign-petition").elements;
    // TODO: Loop through all inputs
  
    for (let i = 0; i < petitionInputs.length; i++){
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');

        }
        else {
            petitionInputs[i].classList.remove('error');
        }

    }
    
    // TODO: Validate the value of each input

  
    // TODO: Call addSignature() and clear fields if no errors
  
    if (containsErrors == false){
        addSignature();
        
        /*
        for (let i = 0; i < petitionInputs.length; i++){
            petitionInputs[i].value="";
            containsErrors=false;
        }*/
    }
  }
  
  signNowButton.addEventListener('click', validateForm);

