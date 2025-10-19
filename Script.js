let inputbox=document.getElementById('inputbox');

let body=document.getElementById('body');
let value="";
body.addEventListener("click",(event)=> {
   if(event.target.classList.contains('num')) {
    value += event.target.textContent;
    inputbox.value = value;
  }
  else if(event.target.classList.contains('operator')){
    value+=event.target.textContent;
    inputbox.value=value;
  }
  else if(event.target.id==="equal"){
    inputbox.value=eval(value);
  }
   else if (event.target.id ==="allclear") {
    value = "";
    inputbox.value = "";
  }

  // Delete last character
  else if (event.target.id === "delete") {
    value = value.slice(0, -1);
    inputbox.value = value;
  }
});
