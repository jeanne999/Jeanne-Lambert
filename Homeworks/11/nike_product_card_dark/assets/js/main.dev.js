"use strict";

$(document).ready(function () {
  $(".my-rating").starRating({
    starSize: 14,
    ratedColor: '#f7bf16',
    ratedColors: ['#f7bf16', '#f7bf16', '#f7bf16', '#f7bf16', '#f7bf16']
  });
  $('select').styler();
});