(function () {
  const display = document.getElementById("display");
  const arrayBtns = document.querySelectorAll(".btn");
  //console.log(arrayBtns);
  const equal = document.getElementById("equal");

  arrayBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      switch (event.target.innerText) {
        case "AC":
          display.innerText = "";
          break;
        case "DEL":
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case "=":
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error!";
          }
          break;
        default:
          display.innerText += event.target.innerText;
      }
    });
  });
})();
