var computerNum = Math.floor(Math.random() * 120) + 19;
var buttonNum1 = Math.floor(Math.random() * 12) + 1;
var buttonNum2 = Math.floor(Math.random() * 12) + 1;
var buttonNum3 = Math.floor(Math.random() * 12) + 1;
var buttonNum4 = Math.floor(Math.random() * 12) + 1;
var buttonValues = [0];
var score = 0;

function total(){
    var total = 0
    for (var i = 0; i < buttonValues.length; i++){
      total = total + buttonValues[i]
    }
 
    console.log(buttonValues);
    $(".score").text(total);
  };
  
  $(".rnumber").text(computerNum);
  

  $("#blue").click(function() {
    buttonValues.push(buttonNum1);
    total();
  });
  $("#green").click(function() {
    buttonValues.push(buttonNum2);
    total();
  });
  $("#orange").click(function() {
    buttonValues.push(buttonNum3);
    total();
  });
  $("#red").click(function() {
    buttonValues.push(buttonNum4);
    total();
  });


  

  if (score === computerNum) {
    $("#wins").html(wins++);
    restartGame();
  }

  else if (score >= computerNum) {
    $("#losses").html(losses++);
    restartGame();
  }





  function restartGame() {
    buttonValues = [];
    score = [];
    computerNum = Math.floor(Math.random() * 100) + 30;
  }