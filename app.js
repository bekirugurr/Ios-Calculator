const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const bottomScreen = document.getElementById("bottom-screen");
const topScreen = document.getElementById("top-screen");
const operandScreen = document.getElementById("operand-screen");

// Sonucun virgülle beraber 9 haneyi geçmemesi için yuvarlama veya uyarı fonksiyonu

function roundMax8Digits(num) {
  let str = num.toString();
  if (str.length < 10) {
    bottomScreen.innerHTML = num;
  }else if (str.indexOf(".") > 9 || (!str.includes(".") && str.length > 9)) {
    bottomScreen.innerHTML = "Too big for the screen";
    bottomScreen.style.fontSize = "1rem";
    bottomScreen.style.color = "indianred";
    setTimeout(() => {
      bottomScreen.innerHTML = "";
      bottomScreen.style.fontSize = "1.7rem";
      bottomScreen.style.color = "white";
    }, 1000);
  }else if (str.indexOf(".") < 8) {
    bottomScreen.innerHTML = num.toFixed(8 - str.indexOf("."));
  }
}
function operation() {
  let number = 0;
  switch (operandScreen.innerText) {
    case "÷":
      number = +topScreen.innerText / +bottomScreen.innerText;
      break;
    case "x":
      number = +topScreen.innerText * +bottomScreen.innerText;
      break;
    case "-":
      number = +topScreen.innerText - +bottomScreen.innerText;
      break;
    case "+":
      number = +topScreen.innerText + +bottomScreen.innerText;
      break;
    case "%":
      number = (+topScreen.innerText / 100) * +bottomScreen.innerText;
      break;
  }
  roundMax8Digits(number);
  topScreen.innerHTML = "";
  operandScreen.innerHTML = "";
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.id == "zero") {
      if (bottomScreen.innerText == "0") {
      } else {
        bottomScreen.innerHTML += e.target.innerText;
      }
    } else if (e.target.id == "dot") {
      if (bottomScreen.innerText == "") {
        bottomScreen.innerHTML = "0.";
      } else if (bottomScreen.innerText.includes(".")) {
      } else {
        bottomScreen.innerHTML += e.target.innerText;
      }
    } else {
      bottomScreen.innerHTML += e.target.innerText;
    }
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", (e) => {
    if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
      topScreen.innerHTML = bottomScreen.innerText;
      operandScreen.innerHTML = e.target.innerText;
      bottomScreen.innerHTML = "";
    } else if (
      operandScreen.innerText.length &&
      bottomScreen.innerText.length == 0
    ) {
      operandScreen.innerHTML = e.target.innerText;
    } else {
      operation();
      topScreen.innerHTML = bottomScreen.innerText;
      operandScreen.innerHTML = e.target.innerText;
      bottomScreen.innerHTML = "";
    }
  });
});

document.getElementById("AC").addEventListener("click", () => {
  bottomScreen.innerHTML = "";
  topScreen.innerHTML = "";
  operandScreen.innerHTML = "";
});

document.getElementById("plus-min").addEventListener("click", () => {
  if (bottomScreen.innerText[0] != "-") {
    bottomScreen.innerHTML = `-${bottomScreen.innerText}`;
  } else {
    bottomScreen.innerHTML = bottomScreen.innerText.slice(1);
  }
});

document.getElementById("equal").addEventListener("click", () => {
  operation();
});





/*
// forEach ile bu kodun kısa versiyonunu yazdım
numbers[0].addEventListener("click", (e) => {
  if (bottomScreen.innerText == "0") {
  } else {
    bottomScreen.innerHTML += e.target.innerText;
  }
});
numbers[1].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[2].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[3].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[4].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[5].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[6].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[7].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[8].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[9].addEventListener("click", (e) => {
  bottomScreen.innerHTML += e.target.innerText;
});
numbers[10].addEventListener("click", (e) => {
  if (bottomScreen.innerText == "") {
    bottomScreen.innerHTML = "0.";
  } else if (bottomScreen.innerText.includes(".")) {
  } else {
    bottomScreen.innerHTML += e.target.innerText;
  }
}); */

/*
//forEach ile kısasını yazdım 
operands[0].addEventListener("click", (e) => {
  if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "÷";
    bottomScreen.innerHTML = "";
  } else if (
    operandScreen.innerText.length &&
    bottomScreen.innerText.length == 0
  ) {
    operandScreen.innerHTML = "÷";
  } else {
    operation();
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "÷";
    bottomScreen.innerHTML = "";
  }
});

operands[1].addEventListener("click", (e) => {
  if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "x";
    bottomScreen.innerHTML = "";
  } else if (
    operandScreen.innerText.length &&
    bottomScreen.innerText.length == 0
  ) {
    operandScreen.innerHTML = "x";
  } else {
    operation();
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "x";
    bottomScreen.innerHTML = "";
  }
});
operands[2].addEventListener("click", (e) => {
  if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "-";
    bottomScreen.innerHTML = "";
  } else if (
    operandScreen.innerText.length &&
    bottomScreen.innerText.length == 0
  ) {
    operandScreen.innerHTML = "-";
  } else {
    operation();
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "-";
    bottomScreen.innerHTML = "";
  }
});
operands[3].addEventListener("click", (e) => {
  if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "+";
    bottomScreen.innerHTML = "";
  } else if (
    operandScreen.innerText.length &&
    bottomScreen.innerText.length == 0
  ) {
    operandScreen.innerHTML = "+";
  } else {
    operation();
    topScreen.innerHTML = bottomScreen.innerText;
    operandScreen.innerHTML = "+";
    bottomScreen.innerHTML = "";
  }
});
operands[4].addEventListener("click", () => {
    if (operandScreen.innerText.length == 0 && bottomScreen.innerText.length) {
      topScreen.innerHTML = bottomScreen.innerText;
      operandScreen.innerHTML = "%";
      bottomScreen.innerHTML = "";
    } else if (
      operandScreen.innerText.length &&
      bottomScreen.innerText.length == 0
    ) {
      operandScreen.innerHTML = "%";
    } else {
      operation();
      topScreen.innerHTML = bottomScreen.innerText;
      operandScreen.innerHTML = "%";
      bottomScreen.innerHTML = "";
    }
  });
*/
