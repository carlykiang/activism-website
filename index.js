// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    document.a.classList.toggle("dark-mode");
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
