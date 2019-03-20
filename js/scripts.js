//lines of text
var inWoods = "You find yourself in the woods. Which way do you go?";
var seeBear = "You see a bear. What do you do?";
var deadEnd = "This is a dead end. What do you do?";
var eaten = "You were eaten."
var escape = "You succcessfully escaped."

//Button one
var left = "Left";
var fight = "Fight the bear!";
var back = "Go back and take the left path.";

//Button two
var right = "Right";
var run = "Run for your life!";
var nap = "Take a nap.";

//Both buttons
var again = "Play again?";

var win = 0;
var loss = 0;

var el1 = document.getElementById("buttonOne");
el1.textContent = left;

var el2 = document.getElementById("buttonTwo");
el2.textContent = right;

var el4 = document.getElementById("story");
el4.textContent = inWoods;

function nextThingOne()
{
  var el3 = document.getElementById("buttonOne");
  var x = document.getElementById("img");
  var w = document.getElementById("simple-table").rows[1].cells;
  var l = document.getElementById("simple-table").rows[1].cells[1];

  if (el3.textContent == left)
  {
    x.setAttribute("src", "images/bearone.jpg");
    changeText(seeBear);
    changeButtonOne(fight);
    changeButtonTwo(run);
  }

  else if (el3.textContent == fight)
  {
    x.setAttribute("src", "images/bearsnarl.jpg");
    changeText(eaten);
    changeButtonOne(again);
    changeButtonTwo(again);
    loss++;
    l.innerHTML = loss;

  }

  else if (el3.textContent == back)
  {
    x.setAttribute("src", "images/bearone.jpg");
    changeText(seeBear);
    changeButtonOne(fight);
    changeButtonTwo(run);

  } else if (el3.textContent == again)
    {
      x.setAttribute("src", "images/bridgeblur.jpg");
      changeText(inWoods);
      changeButtonOne(left);
      changeButtonTwo(right);
    }
    else
    {
      x.setAttribute("src", "images/bridgeblur.jpg");
      changeText(inWoods);
      changeButtonOne(left);
      changeButtonTwo(right);
    }
}

function nextThingTwo()
{
  var el3 = document.getElementById("buttonTwo");
  var x = document.getElementById("img");
  var w = document.getElementById("simple-table").rows[1].cells;
  var l = document.getElementById("simple-table").rows[1].cells[1];

  if (el3.textContent == right)
  {
    x.setAttribute("src", "images/nomtree.jpg");
    changeText(deadEnd);
    changeButtonOne(back);
    changeButtonTwo(nap);
  }

  else if (el3.textContent == nap)
  {
    x.setAttribute("src", "images/naptime.jpg");
    changeText(eaten);
    changeButtonOne(again);
    changeButtonTwo(again);
    loss++;
    l.innerHTML = loss;

  }

  else if (el3.textContent == run)
  {
    x.setAttribute("src", "images/paranoiacut.jpg");
    changeText(escape);
    changeButtonOne(again);
    changeButtonTwo(again);
    win++;
    w[0].innerHTML = win;
  }
  else if (el3.textContent == again)
  {
    x.setAttribute("src", "images/bridgeblur.jpg");
    changeText(inWoods);
    changeButtonOne(left);
    changeButtonTwo(right);
  }
  else
  {
    x.setAttribute("src", "images/bridgeblur.jpg");
    changeText(inWoods);
    changeButtonOne(left);
    changeButtonTwo(right);
  }
}


function changeText(words)
{
    var el4 = document.getElementById("story");
    el4.textContent = words;
}

function changeButtonOne(aButton)
{
  var el1 = document.getElementById("buttonOne");
  el1.textContent = aButton;
}

function changeButtonTwo(bButton)
{
  var el2 = document.getElementById("buttonTwo");
  el2.textContent = bButton;

}
