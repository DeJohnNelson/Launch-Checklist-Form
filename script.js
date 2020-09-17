// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       if(isNaN(fuelLevelInput) || isNaN(cargoMassInput) || copilotName === "" || pilotNameInput === "") {
           window.alert("All fields are required");
           event.preventDefault();
       }   
   })
})

// let button = document.getElementById("formSubmit")
//     button.addEventListener("click",function() {
//         let pilotNameInput = document.getElementById("input[name=pilotName]");
//         console.log(pilotNameInput.value);
//         let copilotName = document.getElementById("input[name=copilotName]");
//         console.log(copilotName.value);
//         let fuelLevelInput = document.getElementById("input[name=fuelLevel]");
//         console.log(fuelLevelInput.value)
//         let cargoMassInput = document.getElementById("input[name=cargoMass]")
//         console.log(cargoMassInput.value)
//     })
   //  window.addEventListener("load", function() {
   //      let form = document.querySelector("form");
   //      form.addEventListener("submit", function(event) {
   //          alert("Form Submitted")
   //      });
            
            
   //      });


fetch("file:///C:/Users/dejoh/LC101/launchcodechecklist/Launch-Checklist-Form/index.html").then(function(response) {
      response.json().then( function(json) {
          const div = document.getElementById("faultyItems");
          div.innerHTML = `
          <ul>
            <li>pilotStatus${json.pilotStatus}</li>
            <li>copilotStatus${json.copilotStatus}</li>
            </ul>
            `;
      }) })