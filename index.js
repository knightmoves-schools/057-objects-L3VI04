// Create the school object with three properties
const school = {
  name: "Anamosa High",
  averageClassSize: undefined,
  mascot: "Blue Raider"
};

// Assign formatted string to the innerHTML of the element with id "result"
document.getElementById("result").innerHTML = 
  `${school.name} has an average class size of ${school.averageClassSize} and their mascot is a ${school.mascot}`;



