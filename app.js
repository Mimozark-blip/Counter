document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const value = document.querySelector("#value");
  const btnContainer = document.querySelector(".c-btn");

  const updateCount = (newCount) => {
    count = newCount;
    value.textContent = count;

    if (count > 0) {
      value.style.color = "#16a085";
    } else if (count < 0) {
      value.style.color = "#e74c3c";
    } else {
      value.style.color = "white";
    }
  };

  btnContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      if (e.target.classList.contains("decrease")) {
        updateCount(count - 1);
      } else if (e.target.classList.contains("increase")) {
        updateCount(count + 1);
      } else if (e.target.classList.contains("reset")) {
        updateCount(0);
      }
    }
  });
});
