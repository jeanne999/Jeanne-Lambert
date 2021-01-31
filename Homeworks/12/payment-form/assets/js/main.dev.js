"use strict";

for (var year = 2000; year <= 2020; year++) {
  var options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
}