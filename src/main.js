// User Interface Logic ---------

import { Calculator } from './../src/js/calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('form#age-info').submit(function(event) {
  event.preventDefault();
  const inputtedName = $('input#name').val();
  const inputtedAge = $('input#age').val();
  const inputtedLifeExpectancy = $('input#lifeExpectancy').val();
  let calculator = new Calculator(inputtedName, inputtedAge, inputtedLifeExpectancy);

  $('#age-info').hide();
  $('#thanks').text(calculator.thankYou()).show();

  $('#mercury-age').text(calculator.mercuryAge());
  $('#mercury-expectancy').text(calculator.mercuryLifeExpectancy());

  $('#venus-age').text(calculator.venusAge());
  $('#venus-expectancy').text(calculator.venusLifeExpectancy());

  $('#mars-age').text(calculator.marsAge());
  $('#mars-expectancy').text(calculator.marsLifeExpectancy());

  $('#jupiter-age').text(calculator.jupiterAge());
  $('#jupiter-expectancy').text(calculator.jupiterLifeExpectancy());

  $('#age-info')[0].reset();
});