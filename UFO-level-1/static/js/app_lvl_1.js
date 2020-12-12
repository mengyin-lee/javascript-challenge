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

// Use d3 `.on` to attach a click handler
filterBotton.on("click", function() {

    tbody.html("");

    // Reference to the 'Enter a Date' input element
    var myInputElement = d3.select("#datetime");
    // Get the value property of the input data
    var myInputValue = myInputElement.property("value");
    console.log(myInputValue);

    // Filter Table with datetime value
    var filterData = tableData.filter(ufoFilter=>ufoFilter.datetime === myInputValue);
    console.log(filterData);

    // Use Arrow Functions for filtered data set
    filterData.forEach((dataSet) => {
        var row = tbody.append("tr");
        Object.entries(dataSet).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});