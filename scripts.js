"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("experience.json")
    .then((response) => response.json())
    .then((experiences) => {
      const container = document.getElementById("card-section");

      experiences.forEach((exp) => {
        let card = document.createElement("div");
        card.classList.add("col-md-4");

        card.innerHTML = `
        <div class="card emp-card mt-3 pt-4 pb-4">
            <div class="container-fluid d-flex flex-column align-items-start">
                <h5 class = "position">${exp.position}</h5>
                <h4 class = "company">${exp.company}</h4>
                <h2 class = "timeline">${exp.joined} - ${exp.left}</h2>
                <h4 class = "location">${exp.location}</h4>
            </div>
        </div>
          `;
        container.appendChild(card);
      });
    })
    .catch((error) => console.log("Error loading JSON Data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("skills-list.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("skills-list");

      // Access the skills array inside the JSON object
      data.skills.forEach((ele) => {
        let listItem = document.createElement("p");
        listItem.textContent = ele; // Directly use the string
        container.appendChild(listItem);
      });
    })
    .catch((error) => console.log("Error loading JSON Data:", error));
});
