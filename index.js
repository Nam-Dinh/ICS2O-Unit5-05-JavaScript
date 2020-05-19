// JavaScript File
function input() {
    let age = document.getElementById("textBoxAge").value;
    let day = document.getElementById("textBoxDay").value;
    
   if ((age >= 4 && age < 19) && (day != "Saturday" && day != "Sunday")) {
      alert("You have to go to school today!");
   } 
  else if ((age > 18 && age < 65) && (day != "Saturday" && day != "Sunday")) {
      alert("Today's a work day for you my friend!");
  } 
  else if (age < 4 || age > 65){
      alert("You don't go to school and you aren't working");
  }
  else {
      alert("It's the weekend!")
  }
}