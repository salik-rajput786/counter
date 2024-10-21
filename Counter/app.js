const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const value = document.querySelector('.value');
const changeBy = document.getElementById('changeBy');



decrement.addEventListener('click' , ()=>{
    const count = parseInt(value.textContent);
    const changeByValue = parseInt(changeBy.value)
    value.textContent = count-changeByValue;
    
   
})

increment.addEventListener('click' , ()=>{
   const count = parseInt(value.textContent);
   const changeByValue = parseInt(changeBy.value)
   value.textContent = count+changeByValue;
   
})
let valur =1;
 function resets (){
    value.textContent=0
   
 }
reset.addEventListener('click' , (e)=>{
  resets()
    
})


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerCheckbox = document.querySelector(".hamburger input[type='checkbox']");
    const menu = document.querySelector(".menu");
    const lines = document.querySelectorAll(".hamburger .line");
    const cross = document.querySelector(".cross");
    
    // Toggle the menu open and close on hamburger click
    hamburgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Show the menu when the checkbox is checked
            menu.style.transform = "translate(0%)";
            cross.style.display = "block"; // Display the 'X' icon
            lines.forEach(line => line.style.display = "none"); // Hide the lines
        } else {
            // Hide the menu when the checkbox is unchecked
            menu.style.transform = "translate(100%)";
            cross.style.display = "none"; // Hide the 'X' icon
            lines.forEach(line => line.style.display = "block"); // Show the lines
        }
    });
 
    // Close the menu if clicked outside of it
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !hamburgerCheckbox.contains(e.target)) {
            hamburgerCheckbox.checked = false; // Uncheck the checkbox to close the menu
            menu.style.transform = "translate(100%)"; // Hide the menu
            cross.style.display = "none"; // Hide the 'X' icon
            lines.forEach(line => line.style.display = "block"); // Show the lines
        }
    });
});



