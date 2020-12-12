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

  //comment out
// // Get a reference to the 'Filter Table' botton
var filterBotton = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
filterBotton.on("click", runSelect);

form.on("submit", runSelect);

d3.selectAll("#dataselect").on("change", runSelect);

function runSelect() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#dataselect");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

    tbody.html("");

    // Use Arrow Functions for filtered data set
    filterData.forEach((dataSet) => {
        var row = tbody.append("tr");
        Object.entries(dataSet).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

