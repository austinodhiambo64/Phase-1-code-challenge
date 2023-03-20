function calculatePoints() {
    const speedInput = document.getElementById("speed");
    const speed = Number(speedInput.value);

if(speed <= 0 ) {
    
        document.getElementById("result").innerHTML = "Please enter valid speed value"; //prompt for correct input values
        document.getElementById("result").innerHTML = "Points: " + demeritPoints;
        // const demeritPoints = Math.floor((speed - 70) / 5);
}

  
if (speed > 0 && speed < 70) {
      document.getElementById("result").innerHTML = "Speeding within allowed limit"; //shows the speed is within allowed range
      document.getElementById("result").innerHTML = "Points: " + demeritPoints;
}  

else {
      const demeritPoints = Math.floor((speed - 70) / 5); //function for evaluating the merit points from input speed value
       document.getElementById("result").innerHTML = "Points: " + demeritPoints;
     //math.floor returns the largest integer <= the value
      if (demeritPoints > 12) {
        document.getElementById("result").innerHTML = "LICENSE SUSPENDED!"; //logs the suspension message
      } else {
        document.getElementById("result").innerHTML = "Points: " + demeritPoints;
      }
    }
    return "Points" + demeritPoints
  }
  