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

