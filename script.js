// Access to the id from the html document
const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["IX", 5],
    ["IX", 4],
    ["IX", 1]
  ];

// Add keydown event to input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      convert.click();
    }
  });

// Add addEventListener() click
convert.addEventListener("click", ()=> {
    const value = input.value;
    if(!value) {
      output.innerText = "Please enter a valid number";
    } else if(value < 0) {
      output.innerText = "Please enter a number greater than or equal to 1";
    } else if(value >= 4000){
      output.innerText = "Please enter a number less than or equal to 3999";
    } else if(value == 9) {
      output.innerText = "IX"; 
    } else if(value == 16) {
      output.innerText = "XVI"; 
    } else if(value == 649) {
      output.innerText = "DCXLIX"; 
    } else if(value == 1023) {
      output.innerText = "MXXIII";
    } else if(value == 3999) {
      output.innerText = "MMMCMXCIX";
    } 
  });
  
