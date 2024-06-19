(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value) {
        screen.value += value;
      }
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Enter the value";
    } else {
      try {
        let answer = eval(screen.value);
        screen.value = answer;
      } catch (e) {
        screen.value = "Error";
      }
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
