function equilateral(a, b, c) {
  if (a===b && a===c){
    return true
  } else {
    return false
  }
}

function isosceles(a, b, c) {
  if (a===b && a!==c){
    return true
  } else if (b===c && b!==a){
    return true
  } else if (a===c & c!==b){
    return true
  } else {
    return false
  }
}

function scalene(a, b, c) {
  if (a!==b && b!==c && a!==c){
    return true
  } else {
    return false
  }
}

function triangle(a, b, c) {
  if (a+b <= c){
    return true
  } else if (a+c <= b){
  return true
  } else if (c+b <= a){
    return true
  }  else {
    return false
  }
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    const a = parseInt($("#side1").val());
    const b = parseInt($("#side2").val());
    const c = parseInt($("#side3").val());

    if (triangle(a, b, c)){
      $(".output").text("This is not a triangle!");
      $(".output").show();
    } else if (equilateral(a, b, c)){
      $(".output").text("This is an equilateral!");
      $(".output").show();
    } else if (scalene(a, b, c)){
      $(".output").text("This is a scalene!");
      $(".output").show();
    } else if (isosceles(a, b, c)){
      $(".output").text("This is an isosceles!");
      $(".output").show();
    } else {
      $(".output").text("Please enter a number..");
      $(".output").show();
    };

  });
});