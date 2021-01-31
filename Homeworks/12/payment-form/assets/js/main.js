$(document).ready(function(){
  $('.card').mask('0000 0000 0000 000');
  $('.cvv').mask('000');

  for (let year = 2000; year <= 2020; year++) {
    let options = document.createElement("OPTION");
    document.getElementById("year").appendChild(options).innerHTML = year;
  }
});


