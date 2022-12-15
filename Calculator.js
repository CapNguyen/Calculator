let numb = document.getElementsByClassName("button numb");
let main_scr = document.getElementById("main_scr");
let small_scr = document.getElementById("small_scr");
let countType = 0;
let countDec = true;
let countInput = true;

function operator(x) {
  resetMainScr();
  if (small_scr.innerText.length == 0) {
    small_scr.innerText = main_scr.innerText.concat(" " + x);
    clearInput();
  } else if (
    small_scr.innerText.charAt(small_scr.innerText.length - 1) == "="
  ) {
    small_scr.innerText = main_scr.innerText.concat(" " + x);
    clearMain();
  } else {
    if (
      isFinite(eval(small_scr.innerText.concat(main_scr.innerText))) == false
    ) {
      clearSmall();
      main_scr.innerText = "Cannot divide by zero";
    } else {
      main_scr.innerText = eval(small_scr.innerText.concat(main_scr.innerText));
      small_scr.innerText = main_scr.innerText.concat(" " + x);
      clearInput();
    }
  }
}
function divide() {
  resetMainScr();
  if (small_scr.innerText.length == 0) {
    small_scr.innerText = main_scr.innerText.concat(" " + "/");
    clearInput();
  } else {
    if (
      isFinite(eval(small_scr.innerText.concat(main_scr.innerText))) == false
    ) {
      clearSmall();
      main_scr.innerText = "Cannot divide by zero";
    } else if (
      small_scr.innerText.charAt(small_scr.innerText.length - 1) == "="
    ) {
      small_scr.innerText = main_scr.innerText.concat(" /");
      clearMain();
    } else {
      main_scr.innerText = eval(small_scr.innerText.concat(main_scr.innerText));
      small_scr.innerText = main_scr.innerText.concat(" " + "/");
      clearInput();
    }
  }
}
function calc() {
  resetMainScr();
  if (small_scr.innerText.length == 0) {
    small_scr.innerText = main_scr.innerText.concat(" =");
  } else if (
    small_scr.innerText.charAt(small_scr.innerText.length - 1) == "="
  ) {
    small_scr.innerText=small_scr.innerText;
  } else {
    result = small_scr.innerText.concat(" " + main_scr.innerText);
    small_scr.innerText = result;
    finalResult = eval(result);
    main_scr.innerText = finalResult;
    if (isFinite(main_scr.innerText) != true) {
      main_scr.innerText = "Cannot divide by zero";
    } else {
      main_scr.innerText = finalResult;
      small_scr.innerText = result.concat(" =");
    }
  }
}
function inverse() {
  if (main_scr.innerText == 0) {
    main_scr.innerText = "Cannot divide by zero";
  } else {
    small_scr.innerText = "1/".concat(main_scr.innerText) + " =";
    main_scr.innerText = eval(1 / main_scr.innerText);
  }
}
function sqr() {
  small_scr.innerText = "sqr(" + main_scr.innerText + ")" + " =";
  main_scr.innerText = eval(Math.pow(main_scr.innerText, 2));
}
function sqrt() {
  if (main_scr.innerText < 0) {
    main_scr.innerText = "Invalid Input";
  } else {
    small_scr.innerText = "sqrt(" + main_scr.innerText + ")" + " =";
    main_scr.innerText = eval(Math.sqrt(main_scr.innerText));
  }
}
function toPercentage() {
  main_scr.innerText = eval("main_scr.innerText /100");
}
function clearInput() {
  main_scr.innerText = "";
}
function clearMain() {
  main_scr.innerText = "0";
  countDec = true;
}
function clearSmall() {
  small_scr.innerText = "";
}
function clearAll() {
  clearMain();
  clearSmall();
}
function delLast() {
  resetMainScr();
  main_scr.innerText = main_scr.innerText.replace(
    main_scr.innerText.charAt(main_scr.innerText.length - 1),
    ""
  );
  if (main_scr.innerText.length == 0) {
    clearMain();
  }
  if (main_scr.innerText.length == 1 && main_scr.innerText.charAt(0) == "-") {
    clearMain();
  }
}
function writeDec() {
  if (countDec == false) {
    return;
  }
  clearSmall();
  main_scr.innerText = main_scr.innerText.concat(".");
  countDec = false;
}
function changeType() {
  clearSmall();
  if (main_scr.innerText.length == 1 && main_scr.innerText == 0) {
    return;
  }
  if (countType % 2 == 1) {
    main_scr.innerText = main_scr.innerText.replace("-", "");
  } else {
    main_scr.innerText = main_scr.innerText.replace("", "-");
  }
  countType++;
}
function writeNumb(i) {
  resetMainScr();
  if (main_scr.innerText.charAt(0) == "0" && main_scr.innerText.length == 1) {
    main_scr.innerText = "";
  }
  if (small_scr.innerText.charAt(small_scr.innerText.length - 1) == "=") {
    clearAll();
    main_scr.innerText = "";
  }
  main_scr.innerText = main_scr.innerText.concat(numb[i].innerText);
}
function resetMainScr() {
  if (main_scr.innerText == "Cannot divide by zero") {
    clearAll();
  }
}
