function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function() {
  $("button#but1").click(function(event) {
   event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
  $("button#but2").click(function(event) {
    event.preventDefault();
     const number1 = parseInt($("#add1").val());
     const number2 = parseInt($("#add2").val());
     const result = subtract(number1, number2);
     $("#output").text(result);
   });
   $("button#but3").click(function(event) {
    event.preventDefault();
     const number1 = parseInt($("#add1").val());
     const number2 = parseInt($("#add2").val());
     const result = multiply(number1, number2);
     $("#output").text(result);
   });
   $("button#but4").click(function(event) {
    event.preventDefault();
     const number1 = parseInt($("#add1").val());
     const number2 = parseInt($("#add1").val());
     const result = divide(number1, number2);
     $("#output").text(result);
   });
});