  // Function to handle button clicks
  function handleButtonClick(e) {
    const buttonText = e.target.innerText;

    switch (buttonText) {
      case "AC":
        clearDisplay();
        break;
      case "DEL":
        deleteLastCharacter();
        break;
      case "=":
        evaluateExpression();
        break;
      case ".":
        addDecimalPoint();
        break;
      default:
        appendToDisplay(buttonText);
    }
  }

  // Function to clear the display
  function clearDisplay() {
    display.innerText = "0";
    str = "";
  }

  // Function to delete the last character
  function deleteLastCharacter() {
    str = str.slice(0, -1);
    display.innerText = str;
  }

  // Function to evaluate the expression
  function evaluateExpression() {
    str = eval(str);
    display.innerText = str;
  }

  // Function to add a decimal point
  function addDecimalPoint() {
    if (!str.includes(".")) {
      str += ".";
      display.innerText = str;
    }
  }

  // Function to append text to the display
  function appendToDisplay(text) {
    // If the current display value is "0", replace it with the new text
    if (display.innerText === "0") {
      display.innerText = text;
    } 
   else {
      display.innerText += text;
    }
    str += text;
  }

  // Select buttons and attach event listeners
  let buttons = document.getElementsByTagName("button");
  let display = document.querySelector("#display");
  let str = "";

  Array.from(buttons).forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });
