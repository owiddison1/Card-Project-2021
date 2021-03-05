function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function restart() {
  location.reload();
}
function game() {
  var name1text = document.getElementById("name1");
  var name1 = "";
  var y;
  for(y = 0 ; y < name1text.length ;y++) {
    name1 += name1text.elements[y].value + "<br>";
  }
  var name2text = document.getElementById("name2");
  var name2 = "";
  var z;
  for(z = 0 ; z < name2text.length ;z++) {
    name2 += name2text.elements[z].value + "<br>";
  }
  var deck = ["y1","y2","y3","y4","y5","y6","y7","y8","y9","y0","r1","r2","r3","r4","r5","r6","r7","r8","r9","r0","b1","b2","b3","b4","b5","b6","b7","b8","b9","b0"];
  var score1 = 0;
  var score2 = 0;
  var hand1 = ["","","","","","","","","","","","","","",""];
  var hand2 = ["","","","","","","","","","","","","","",""];
  for(i = 0 ; i < 15 ; i++) {
    let selection = false;
    while(!selection) {
      let number = getRandomInt(30);
      hand1[i] = deck[number]
      if(hand1[i] != "0") {
        deck[number] = "0";
        selection = true;
      }
    }
    selection = false;
    while(!selection) {
      let number = getRandomInt(30);
      hand2[i] = deck[number]
      if(hand2[i] != "0") {
        deck[number] = "0";
        selection = true;
      }
    }
  }
  for(x = 0 ; x < 15 ; x++) {
    let base1 = hand1[x];
    let base2 = hand2[x];
    let colour1 = base1.charAt(0);
    let colour2 = base2.charAt(0);
    let num1 = base1.charAt(1);
    let num2 = base2.charAt(1);
    if(colour1 == "r") {
      if(num1 == "8") {
        document.write("<p>Player 1 drew an <span style='background-color:red;padding:4px;color:white'>   " + num1 + "   </span><p>")
      } else {
        document.write("<p>Player 1 drew a <span style='background-color:red;padding:4px;color:white'>   " + num1 + "   </span><p>")
      }
    }
    if(colour1 == "y") {
      if(num1 == "8") {
        document.write("<p>Player 1 drew an <span style='background-color:yellow;padding:4px'>   " + num1 + "   </span><p>")
      } else {
        document.write("<p>Player 1 drew a <span style='background-color:yellow;padding:4px'>   " + num1 + "   </span><p>")
      }
    }
    if(colour1 == "b") {
      if(num1 == "8") {
        document.write("<p>Player 1 drew an <span style='background-color:black;padding:4px;color:white'>   " + num1 + "   </span><p>")
      } else {
        document.write("<p>Player 1 drew a <span style='background-color:black;padding:4px;color:white'>   " + num1 + "   </span><p>")
      }
    }
    if(colour2 == "r") {
      if(num2 == "8") {
        document.write("<p>Player 2 drew an <span style='background-color:red;padding:4px;color:white'>   " + num2 + "   </span><p>")
      } else {
        document.write("<p>Player 2 drew a <span style='background-color:red;padding:4px;color:white'>   " + num2 + "   </span><p>")
      }
    }
    if(colour2 == "y") {
      if(num2 == "8") {
        document.write("<p>Player 2 drew an <span style='background-color:yellow;padding:4px'>   " + num2 + "   </span><p>")
      } else {
        document.write("<p>Player 2 drew a <span style='background-color:yellow;padding:4px'>   " + num2 + "   </span><p>")
      }
    }
    if(colour2 == "b") {
      if(num2 == "8") {
        document.write("<p>Player 2 drew an <span style='background-color:black;padding:4px;color:white'>   " + num2 + "   </span><p>")
      } else {
        document.write("<p>Player 2 drew a <span style='background-color:black;padding:4px;color:white'>   " + num2 + "   </span><p>")
      }
    }
    if(colour1 == colour2) {
      if(num1 > num2) {
        score1++;
        document.write("<p>" + name1 + " won this round<p>");
      } else {
        score2++;
        document.write("<p>" + name2 + " won this round<p>");
      }
    } else if(colour1 == "y") {
      if(colour2 == "r") {
        score1++;
        document.write("<p>" + name1 + " won this round<p>");
      } else {
        score2++;
        document.write("<p>" + name2 + " won this round<p>");
      }
    } else if(colour1 == "r") {
      if(colour2 == "b") {
        score1++;
        document.write("<p>" + name1 + " won this round<p>");
      } else {
        score2++;
        document.write("<p>" + name2 + " won this round<p>");
      }
    } else if(colour1 == "b") { //I didn't use else to check that colours were selected                                  properly
      if(colour2 == "y") {
        score1++;
        document.write("<p>" + name1 + " won this round<p>");
      } else {
        score2++;
        document.write("<p>" + name2 + " won this round<p>");
      }
    }
  }
  if(score1 > score2) {
    document.write("<p>" + name1 + " won the game, better luck next time " + name2 + "<p>");
  } else {
    document.write("<p>" + name2 + " won the game, better luck next time " + name1 + "<p>");
  }
  document.write("<h3>Would you like to play again?</h3>\n<button onclick='restart()'>Yes</button>");
}