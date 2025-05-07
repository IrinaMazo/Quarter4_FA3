function myFunction() {
      var x = parseInt(document.getElementById("num").value);
      var output = "";

      if (!isNaN(x)) {
        if (x % 2 == 0) {
          for (var i = x; i >= 1; i--) {
            output += i + " ";
            for (var j = 2; j <= i; j++) {
               output += i + " ";
            }
			output += "<br>";
          }
        } else {
          for (var i = x; i >= 1; i--) {
            output += i + " ";
            for (var j = 2; j <= x; j++) {
              output += i + " ";
            }
            output += "<br>";
          }
        }
        document.getElementById("result").innerHTML = output;
      }
      
      else if (isNaN(document.getElementById("num").value)){
      	output+= "Please input a number."
        
        document.getElementById("result").innerHTML = output;
      }

      return false;
}

const x = [];

function addition() {
  const n = document.getElementById("name").value.trim();
  if (!n) return false;

  if (x.length >= 7) {
    x.shift(); 
  }

  x.push(n); 

  document.getElementById("result2").innerHTML = x.join(" ");
  document.getElementById("name").value = ""; 
  return false;
}

function remove(){
  x.pop();
  document.getElementById("result2").innerHTML = x.join(" ");
  return false;
}
  