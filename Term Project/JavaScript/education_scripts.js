document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  fetch("degrees.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
      removeButton();
      showReturnButton();
    })
    .catch(error => {
      displayError(error.message);
    });
}

function removeButton() {
  var buttonElement = document.getElementById("fetchButton");
  buttonElement.parentNode.removeChild(buttonElement);
}

function showReturnButton() {
  var resultDiv = document.getElementById("result");

  var returnButton = document.createElement("button");
  returnButton.textContent = "Return";
  returnButton.addEventListener("click", function() {
    window.location.reload();
  });

  resultDiv.appendChild(returnButton);
}

function displayData(data) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear existing content

  var degrees = data.degrees;

  var table = document.createElement("table");
  table.classList.add("degree-table");

  // Create table header row
  var headerRow = document.createElement("tr");
  var headers = ["School", "Program", "Type", "Year Conferred"];

  headers.forEach(function(headerText) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  table.appendChild(headerRow);

  // Create table data rows
  degrees.forEach(function(degree) {
    var dataRow = document.createElement("tr");

    var schoolCell = document.createElement("td");
    schoolCell.textContent = degree.school;
    dataRow.appendChild(schoolCell);

    var programCell = document.createElement("td");
    programCell.textContent = degree.program;
    dataRow.appendChild(programCell);

    var typeCell = document.createElement("td");
    typeCell.textContent = degree.type;
    dataRow.appendChild(typeCell);

    var yearCell = document.createElement("td");
    yearCell.textContent = degree.yearConferred;
    dataRow.appendChild(yearCell);

    table.appendChild(dataRow);
  });

  resultDiv.appendChild(table);
}

function displayError(errorMessage) {
  var resultDiv = document.getElementById("result");
  resultDiv.textContent = "An error occurred: " + errorMessage;
}

