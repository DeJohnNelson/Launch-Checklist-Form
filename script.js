// Write your JavaScript code here!

// This block of code shows how to format the HTML once you fetch some planetary JSON!


window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
          const div = document.getElementById("missionTarget");
         
          div.innerHTML = `
          <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">
            `;
      }) 
   })
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


