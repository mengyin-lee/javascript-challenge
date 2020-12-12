// from data.js
var tableData = data;
console.log(tableData);


// Get a reference to the table body
var tbody = d3.select("tbody");

// // **loop thru tableData for UFO Sightings data value**//
// tableData.forEach(function(ufo){

//     //Use d3 to append one table row `tr` for each ufo object
//     var row = tbody.append("tr");

//     //Use `Object.entries` to console.log each ufo value
//     Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);
// 
//     // Use d3 to append a cell to the row for each ufo value 
//     var cell = row.append("td");
//     cell.text(value);
//     });
// });

// Another method: Refactor to use Arrow Functions!
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Get a reference to the 'Filter Table' botton
var filterBotton = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("form");

// // Create event handlers
// filterBotton.on("click", runSelect);
// form.on("submit", runSelect);

// Use d3 `.on` to attach a click handler
filterBotton.on("click", function() {
    
    // clean up not needed data
    tbody.html("");

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Reference to the input data element
    var inputDatetime = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input data
    var datetimeValue = inputDatetime.property("value").trim().toLowerCase();
    var cityValue = inputCity.property("value").trim().toLowerCase();
    var stateValue = inputState.property("value").trim().toLowerCase();
    var countryValue = inputCountry.property("value").trim().toLowerCase();
    var shapeValue = inputShape.property("value").trim().toLowerCase();

    // Set filteredData first as full set of TableData
    var filteredData = tableData;

    // Check if each input field has value
    if (datetimeValue != ""){
      filteredData = filteredData.filter(ufodata => ufodata.datetime === datetimeValue);
    }
    if (cityValue !=""){ 
      filteredData = filteredData.filter(ufodata => ufodata.city === cityValue);
    }
    if (stateValue != ""){ 
      filteredData = filteredData.filter(ufodata => ufodata.state === stateValue);
    }
    if (countryValue !=""){ 
      filteredData = filteredData.filter(ufodata => ufodata.country === countryValue);
    }
    if (shapeValue !=""){ 
      filteredData = filteredData.filter(ufodata => ufodata.shape === shapeValue);
    }

    // Use Arrow Functions for filtered data set
    filteredData.forEach((dataSet) => {
        var row = tbody.append("tr");
        Object.entries(dataSet).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});